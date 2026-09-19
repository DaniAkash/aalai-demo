/** Truncates text to at most `max` words, appending an ellipsis when shortened. */
export const truncateWords = (text: string, max: number): string => {
  const words = text.split(' ')
  return words.slice(0, max).join(' ')
}
