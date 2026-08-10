// Graceful fallback for any image that fails to load (offline, CDN hiccup).
const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#1c1917"/><stop offset="1" stop-color="#2c2620"/>' +
      '</linearGradient></defs>' +
      '<rect fill="url(#g)" width="1600" height="1000"/>' +
      '</svg>'
  );

export function onImgError(event) {
  const img = event.currentTarget;
  if (img && img.src !== FALLBACK) img.src = FALLBACK;
}