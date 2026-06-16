export async function fetchAPI(path: string, query = "") {
  const url = `${import.meta.env.PUBLIC_STRAPI_URL}/api/${path}${query ? `?${query}` : ""}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Strapi API Error: ${response.status} for ${path}`);
      return { data: null };
    }
    return response.json();
  } catch (error) {
    console.warn(`Strapi fetch failed for ${path}:`, error);
    return { data: null };
  }
}

export function getStrapiURL(url: string) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${import.meta.env.PUBLIC_STRAPI_URL}${url}`;
}
