/** Capitalises the first character of a string. */
export const capitalise = (text: string): string => {
  if (!text) {
    return text
  }
  return text.charAt(0).toUpperCase() + text.slice(1)
}
