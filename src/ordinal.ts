/** Returns the ordinal suffix form of a number, such as 1st or 22nd. */
export const ordinal = (n: number): string => {
  const absolute = Math.abs(n)
  const lastTwoDigits = absolute % 100
  const lastDigit = absolute % 10
  const suffix =
    lastTwoDigits >= 11 && lastTwoDigits <= 13
      ? 'th'
      : lastDigit === 1
        ? 'st'
        : lastDigit === 2
          ? 'nd'
          : lastDigit === 3
            ? 'rd'
            : 'th'

  return `${n}${suffix}`
}
