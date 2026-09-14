const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

const payload = {
  host: "next-hub.pro",
  key: "949e3157c6ae4860a58db4d81fd0de3c",
  keyLocation: "https://next-hub.pro/949e3157c6ae4860a58db4d81fd0de3c.txt",
  urlList: [
    "https://next-hub.pro/",
    "https://next-hub.pro/about",
    "https://next-hub.pro/contact",
    "https://next-hub.pro/work",
    "https://next-hub.pro/services",
    "https://next-hub.pro/seo-services",
    "https://next-hub.pro/webdevelopment",
    "https://next-hub.pro/services/soc_media",
    "https://next-hub.pro/services/digital_marketing",
    "https://next-hub.pro/services/analytics",
    "https://next-hub.pro/website-maintenance-services",
    "https://next-hub.pro/services/graphic_design",
    "https://next-hub.pro/en",
    "https://next-hub.pro/en/real-estate-websites",
    "https://next-hub.pro/en/clinic-booking-systems",
    "https://next-hub.pro/en/tourism-websites",
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
