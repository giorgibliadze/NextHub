const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const SCAN_DIRS = ["pages", "app", "components", "lib"];
const TEXT_EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx"]);
const MIN_DESCRIPTION_LENGTH = 120;
const MAX_DESCRIPTION_LENGTH = 160;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return walk(fullPath);
    }

    if (!TEXT_EXTENSIONS.has(path.extname(entry.name))) {
      return [];
    }

    return [fullPath];
  });
}

function lineNumber(source, index) {
  return source.slice(0, index).split("\n").length;
}

function decodeEscapes(value) {
  return value.replace(/\\(["'`])/g, "$1").replace(/\\n/g, " ");
}

function extractStringValue(source, startIndex) {
  const equalsIndex = source.indexOf("=", startIndex);
  const colonIndex = source.indexOf(":", startIndex);
  const delimiterIndex =
    equalsIndex === -1
      ? colonIndex
      : colonIndex === -1
        ? equalsIndex
        : Math.min(equalsIndex, colonIndex);

  if (delimiterIndex === -1) return null;

  let index = delimiterIndex + 1;
  while (/\s/.test(source[index])) index += 1;

  const quote = source[index];
  if (!["\"", "'", "`"].includes(quote)) return null;

  let value = "";
  index += 1;

  while (index < source.length) {
    const char = source[index];
    if (char === "\\" && index + 1 < source.length) {
      value += char + source[index + 1];
      index += 2;
      continue;
    }

    if (char === quote) {
      return decodeEscapes(value).replace(/\s+/g, " ").trim();
    }

    value += char;
    index += 1;
  }

  return null;
}

function findDescriptionIssues(file, source) {
  const issues = [];
  const patterns = [
    /\bdescription\s*=/g,
    /\bdescription\s*:/g,
  ];

  patterns.forEach((pattern) => {
    let match;
    while ((match = pattern.exec(source))) {
      const value = extractStringValue(source, match.index);
      if (!value) continue;

      if (
        value.length < MIN_DESCRIPTION_LENGTH ||
        value.length > MAX_DESCRIPTION_LENGTH
      ) {
        issues.push({
          type: "description-length",
          file,
          line: lineNumber(source, match.index),
          length: value.length,
          value,
        });
      }
    }
  });

  return issues;
}

function findImageIssues(file, source) {
  const issues = [];
  const imageRegex = /<(Image|img)\b[\s\S]*?(?:\/>|<\/\1>)/g;
  let match;

  while ((match = imageRegex.exec(source))) {
    const tag = match[0];
    const altMatch = tag.match(/\balt\s*=\s*(?:"[^"]*"|'[^']*'|\{[^}]*\})/);

    if (!altMatch) {
      issues.push({
        type: "missing-alt",
        file,
        line: lineNumber(source, match.index),
        tag: match[1],
      });
      continue;
    }

    if (/\balt\s*=\s*\{(?:undefined|null)\}/.test(altMatch[0])) {
      issues.push({
        type: "invalid-alt",
        file,
        line: lineNumber(source, match.index),
        tag: match[1],
      });
    }
  }

  return issues;
}

const files = SCAN_DIRS.flatMap((dir) => walk(path.join(ROOT, dir)));
const issues = files.flatMap((file) => {
  const source = fs.readFileSync(file, "utf8");
  const relativeFile = path.relative(ROOT, file);
  return [
    ...findImageIssues(relativeFile, source),
    ...findDescriptionIssues(relativeFile, source),
  ];
});

if (issues.length > 0) {
  console.error("SEO audit failed:");
  issues.forEach((issue) => {
    if (issue.type === "description-length") {
      console.error(
        `- ${issue.file}:${issue.line} description length ${issue.length}: ${issue.value}`
      );
      return;
    }

    console.error(`- ${issue.file}:${issue.line} ${issue.type} on <${issue.tag}>`);
  });
  process.exit(1);
}

console.log(
  `SEO audit passed: ${files.length} files scanned, image alt attributes and description lengths look good.`
);
