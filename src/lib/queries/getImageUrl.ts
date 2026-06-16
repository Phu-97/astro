// src/lib/getImageUrl.ts

/**
 * Trả về URL ảnh đầy đủ:
 * - Nếu image.url đã là absolute URL (http...) → giữ nguyên (vd: Strapi Cloud/Cloudinary)
 * - Nếu là relative path → nối với PUBLIC_STRAPI_URL
 */
export function getImageUrl(url?: string | null): string {
  if (!url) return "";
  return url.startsWith("http")
    ? url
    : `${import.meta.env.PUBLIC_STRAPI_URL}${url}`;
}
