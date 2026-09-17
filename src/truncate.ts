/** Truncates text to `max` characters, appending an ellipsis when it was shortened. */
export const truncate = (text: string, max: number): string => {
  if (text.length <= max) {
    return text
  }
  return `${text.slice(0, max)}…`
}
