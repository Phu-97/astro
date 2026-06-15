export async function fetchAPI(path: string, query = "") {
  const url = `${import.meta.env.PUBLIC_STRAPI_URL}/api/${path}${query ? `?${query}` : ""}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Strapi API Error: ${response.status}`);
  }

  return response.json();
}
