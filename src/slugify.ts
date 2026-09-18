/** Converts text to a URL-safe slug. */
export const slugify = (text: string): string =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
