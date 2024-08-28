import axios from "axios";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const AUTH_URL =
  "https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token";

export const getAuthToken = async () => {
  try {
    // Create the Authorization header by base64 encoding the client_id and client_secret
    const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
      "base64"
    );

    // Make the POST request to get the token
    const response = await axios.post(
      AUTH_URL,
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${credentials}`,
        },
      }
    );

    // Extract and log the access token
    const accessToken = response.data.access_token;
    console.log("access_token:", accessToken);
    return accessToken;
  } catch (error) {
    console.error(
      "Error fetching auth token:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Authentication failed");
  }
};

// Usage example
getAuthToken()
  .then((token) => console.log("Received token:", token))
  .catch((error) => console.error("Failed to get token:", error));
