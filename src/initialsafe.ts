/** Returns the first character of each word, uppercased. */
export const initialsOf = (name: string): string =>
  name
    .split(/\s+/)
    .filter((part) => part.length > 0)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase()
