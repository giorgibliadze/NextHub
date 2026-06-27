const { spawn } = require("child_process");

const [, , command, ...args] = process.argv;

if (!command) {
  console.error("Usage: node scripts/run-with-current-browser-data.js <command> [...args]");
  process.exit(1);
}

const ignoredWarning =
  "[baseline-browser-mapping] The data in this module is over two months old.";

const child = spawn(command, args, {
  env: {
    ...process.env,
    BROWSERSLIST_IGNORE_OLD_DATA: "true",
    BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA: "true",
  },
  shell: process.platform === "win32",
  stdio: ["inherit", "pipe", "pipe"],
});

const pipeFiltered = (source, target) => {
  let pending = "";

  source.on("data", (chunk) => {
    pending += chunk.toString();
    const lines = pending.split(/\r?\n/);
    pending = lines.pop() || "";

    lines.forEach((line) => {
      if (!line.includes(ignoredWarning)) {
        target.write(`${line}\n`);
      }
    });
  });

  source.on("end", () => {
    if (pending && !pending.includes(ignoredWarning)) {
      target.write(pending);
    }
  });
};

pipeFiltered(child.stdout, process.stdout);
pipeFiltered(child.stderr, process.stderr);

child.on("error", (error) => {
  console.error(error.message);
  process.exit(1);
});

child.on("close", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code || 0);
});
