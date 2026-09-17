/** Returns the uppercase initials of a full name, at most two characters. */
export const initials = (fullName: string): string => {
  const parts = fullName.split(' ')
  return parts.map((part) => part[0]).join('').toUpperCase()
}
