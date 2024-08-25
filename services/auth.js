import axios from "axios";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const AUTH_URL =
  "https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token";

export const getAuthToken = async () => {
  try {
    const credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
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
        timeout: 10000, // 10 seconds timeout
      }
    );

    console.log("Response:", response);
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching auth token:", error);
    if (error.response) {
      // Server responded with a status other than 200
      console.error("Error response data:", error.response.data);
    } else if (error.request) {
      // No response received
      console.error("No response received:", error.request);
    } else {
      // Something else caused the error
      console.error("Error message:", error.message);
    }
    throw new Error("Authentication failed");
  }
};
