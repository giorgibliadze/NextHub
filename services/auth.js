import axios from "axios";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const AUTH_URL =
  "https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token";

export const getAuthToken = async () => {
  try {
    // Base64 კოდირება მომხმარებლის სახელისა და პაროლისთვის
    const credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

    // მოთხოვნა ტოკენის მისაღებად
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

    // ტოკენის ამოღება პასუხიდან
    const { access_token } = response.data;
    return access_token;
  } catch (error) {
    // დეტალური შეცდომის ლოგირება
    if (error.response) {
      console.error("Authentication error:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    throw new Error("Authentication failed");
  }
};
