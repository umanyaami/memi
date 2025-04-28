export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.dexscreener.com/latest/dex/search/?network=solana&query=');
    const data = await response.json();
    res.setHeader('Cache-Control', 'no-store'); // supaya selalu fresh
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
