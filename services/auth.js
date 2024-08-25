import axios from 'axios';

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const AUTH_URL = 'https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token';

export const getAuthToken = async () => {
  try {
    const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
    const response = await axios.post(AUTH_URL, new URLSearchParams({
      grant_type: 'client_credentials',
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${credentials}`,
      },
      timeout: 10000, // 10 seconds timeout
    });

    // Extract the access token from the response
    const { access_token } = response.data;
    return access_token;
  } catch (error) {
    console.error('Error fetching auth token:', error);
    throw new Error('Authentication failed');
  }
};
