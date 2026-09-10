/**
 * Resolves a Lovable asset pointer URL to an absolute CDN URL.
 *
 * Asset pointers store a root-relative path (`/__l5e/assets-v1/...`) that is
 * only served by Lovable hosting. When the same code is deployed elsewhere
 * (e.g. Vercel) those paths 404, so we prefix them with the project's stable
 * Lovable host.
 *
 * Cache-busting: Uses the asset_id from the URL path as a query parameter
 * to ensure Vercel cache is invalidated when assets are updated in Lovable.
 */
const ASSET_HOST =
  "https://project--6aedd7ff-e7aa-4992-bce9-81341544213a.lovable.app";

export function assetUrl(pointer: { url: string } | string): string {
  const url = typeof pointer === "string" ? pointer : pointer.url;
  if (/^https?:\/\//.test(url)) return url;
  
  const fullUrl = `${ASSET_HOST}${url.startsWith("/") ? "" : "/"}${url}`;
  
  // Extract asset_id from the path to use as cache buster
  // URL format: /__l5e/assets-v1/{asset_id}/filename
  // This ensures that when the asset is updated in Lovable (new asset_id),
  // Vercel's cache is invalidated and the new image displays immediately
  const assetIdMatch = url.match(/assets-v1\/([^/]+)\//);
  const cacheBuster = assetIdMatch ? assetIdMatch[1] : Date.now();
  
  return `${fullUrl}?v=${cacheBuster}`;
}
