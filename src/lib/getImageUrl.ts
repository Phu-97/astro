// src/lib/getImageUrl.ts

export function getImageUrl(url?: string | null): string {
  if (!url) return "";
  return url.startsWith("http")
    ? url
    : `${import.meta.env.PUBLIC_STRAPI_URL}${url}`;
}
