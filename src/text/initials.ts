/** Returns the uppercase initials of a full name, at most two characters. */
export const initials = (fullName: string): string => {
  const parts = fullName.split(' ')
  const selectedParts = parts.length === 1 ? parts : [parts[0], parts[parts.length - 1]]
  return selectedParts.map((part) => part[0]).join('').toUpperCase()
}
