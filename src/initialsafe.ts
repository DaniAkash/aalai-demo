/** Returns the first character of each word, uppercased. */
export const initialsOf = (name: string): string =>
  name.split(' ').map((part) => part.charAt(0)).join('').toUpperCase()
