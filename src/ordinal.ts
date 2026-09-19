/** Returns the ordinal suffix form of a number, such as 1st or 22nd. */
export const ordinal = (n: number): string => {
  const lastTwoDigits = Math.abs(n) % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${n}th`
  }

  const lastDigit = lastTwoDigits % 10
  const suffix = lastDigit === 1 ? 'st' : lastDigit === 2 ? 'nd' : lastDigit === 3 ? 'rd' : 'th'

  return `${n}${suffix}`
}
