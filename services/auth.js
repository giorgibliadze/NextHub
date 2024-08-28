const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const AUTH_URL =
  "https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token";

export const getAuthToken = async () => {
  try {
    const credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

    console.log("Sending request to:", AUTH_URL);
    console.log("Encoded Credentials:", credentials);

    const response = await fetch(AUTH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${credentials}`,
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const accessToken = data.access_token;

    console.log("access_token:", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error fetching auth token:", error);
    throw new Error("Authentication failed");
  }
};
