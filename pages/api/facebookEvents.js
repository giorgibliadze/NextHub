// pages/api/facebookEvents.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { event_name, event_time, user_data, custom_data } = req.body;
    const url = `https://graph.facebook.com/${process.env.NEXT_PUBLIC_FACEBOOK_API_VERSION}/${process.env.NEXT_PUBLIC_FACEBOOK_DATASET_ID}/events?access_token=${process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN}`;

    const payload = {
      data: [
        {
          event_name,
          event_time,
          user_data,
          custom_data,
        },
      ],
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json(data);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
