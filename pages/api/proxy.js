import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { url, method, data, headers } = req.body;

      const response = await axios({
        url,
        method,
        data,
        headers,
      });

      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(error.response?.status || 500).json({
        message: 'Proxy request failed',
        error: error.response?.data || error.message,
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}