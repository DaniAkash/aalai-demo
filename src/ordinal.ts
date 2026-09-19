/** Returns the ordinal suffix form of a number, such as 1st or 22nd. */
export const ordinal = (n: number): string => {
  const finalTwoDigits = Math.abs(n) % 100
  const finalDigit = Math.abs(n) % 10

  if (finalTwoDigits >= 11 && finalTwoDigits <= 13) {
    return `${n}th`
  }

  const suffix = finalDigit === 1 ? 'st' : finalDigit === 2 ? 'nd' : finalDigit === 3 ? 'rd' : 'th'
  return `${n}${suffix}`
}
