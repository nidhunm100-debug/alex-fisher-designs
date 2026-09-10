/**
 * Resolves an image pointer to a URL that works on every host.
 *
 * All artwork photos are committed to `public/photos/<original filename>`, so
 * they are served by whatever host runs the site (Lovable, Vercel, anywhere).
 * Absolute URLs are passed through unchanged.
 */
export function assetUrl(
  pointer: { url: string; original_filename?: string } | string,
): string {
  if (typeof pointer === "string") return pointer;
  if (/^https?:\/\//.test(pointer.url)) return pointer.url;
  const name =
    pointer.original_filename ?? pointer.url.split("/").pop() ?? "";
  return `/photos/${name}`;
}
