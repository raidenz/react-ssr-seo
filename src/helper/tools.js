/**
 * Detect component rendered from server / client js
 */
const isServer = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export { isServer };
