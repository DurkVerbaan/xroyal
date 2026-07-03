export default async function handler(req, res) {
  const type = req.query.type || 'content';
  const projectId = process.env.SANITY_PROJECT_ID || 'pnnengxa';
  const dataset = process.env.SANITY_DATASET || 'production';
  const apiVersion = process.env.SANITY_API_VERSION || '2021-10-21';

  let query = '*[_type == "salonInfo"][0]';
  if (type === 'lookbook') {
    query = '*[_type == "salonInfo"][0]{ "fotos": galerij[].asset->url }';
  }

  const url = `https://${projectId}.api.sanity.io/${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Sanity request failed with status ${response.status}`);
    }

    const json = await response.json();
    res.status(200).json(json.result || null);
  } catch (error) {
    console.error('Sanity proxy error:', error);
    res.status(500).json({ error: error.message });
  }
}
