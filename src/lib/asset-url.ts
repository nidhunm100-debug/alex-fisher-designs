/**
 * Resolves a Lovable asset pointer URL to an absolute CDN URL.
 *
 * Asset pointers store a root-relative path (`/__l5e/assets-v1/...`) that is
 * only served by Lovable hosting. When the same code is deployed elsewhere
 * (e.g. Vercel) those paths 404, so we prefix them with the project's stable
 * Lovable host.
 */
const ASSET_HOST =
  "https://project--6aedd7ff-e7aa-4992-bce9-81341544213a.lovable.app";

export function assetUrl(pointer: { url: string } | string): string {
  const url = typeof pointer === "string" ? pointer : pointer.url;
  if (/^https?:\/\//.test(url)) return url;
  return `${ASSET_HOST}${url.startsWith("/") ? "" : "/"}${url}`;
}
