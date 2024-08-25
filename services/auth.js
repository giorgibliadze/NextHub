import axios from "axios";
import qs from "qs";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID; // Store in .env file
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET; // Store in .env file
const AUTH_URL =
  "https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token";

export const getAuthToken = async () => {
  try {
    const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
      "base64"
    );
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
    return data.access_token;
  } catch (error) {
    console.error("Error fetching auth token:", error);
    throw new Error("Authentication failed");
  }
};
