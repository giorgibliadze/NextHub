const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

const payload = {
  host: "www.next-hub.pro",
  key: "949e3157c6ae4860a58db4d81fd0de3c",
  keyLocation: "https://www.next-hub.pro/949e3157c6ae4860a58db4d81fd0de3c.txt",
  urlList: [
    "https://www.next-hub.pro/",
    "https://www.next-hub.pro/about",
    "https://www.next-hub.pro/contact",
    "https://www.next-hub.pro/work",
    "https://www.next-hub.pro/services",
    "https://www.next-hub.pro/services/seo",
    "https://www.next-hub.pro/services/web_development",
    "https://www.next-hub.pro/services/soc_media",
    "https://www.next-hub.pro/services/digital_marketing",
    "https://www.next-hub.pro/services/analytics",
    "https://www.next-hub.pro/services/tech_support",
    "https://www.next-hub.pro/services/graphic_design",
  ],
};

const STATUS_MESSAGES = {
  400: "Bad request. Check that the JSON payload and URL list are valid.",
  403: "Forbidden. Confirm the IndexNow key file is deployed and accessible at keyLocation.",
  422: "Unprocessable entity. Confirm the submitted URLs belong to the declared host.",
  429: "Too many requests. Wait before retrying the IndexNow submission.",
};

async function submitIndexNow() {
  console.log(`IndexNow: submitting ${payload.urlList.length} URLs to ${INDEXNOW_ENDPOINT}`);

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();

  console.log(`IndexNow: response status ${response.status}`);

  if (response.status === 200 || response.status === 202) {
    console.log("IndexNow: submission successful.");
    return;
  }

  const statusMessage =
    STATUS_MESSAGES[response.status] || `Unexpected response status ${response.status}.`;
  const bodyMessage = responseText ? ` Response body: ${responseText}` : "";

  throw new Error(`${statusMessage}${bodyMessage}`);
}

submitIndexNow().catch((error) => {
  console.error(`IndexNow: submission failed. ${error.message}`);
  process.exitCode = 1;
});
