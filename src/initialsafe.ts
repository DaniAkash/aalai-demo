/** Returns the first character of each word, uppercased. */
export const initialsOf = (name: string): string => {
  const trimmedName = name.trim()

  if (trimmedName === '') {
    return ''
  }

  return trimmedName
    .split(/\s+/)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()
}
