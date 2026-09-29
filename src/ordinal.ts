/** Returns the ordinal suffix form of a number, such as 1st or 22nd. */
export const ordinal = (n: number): string => {
  const last = n % 10
  if (last === 1) return `${n}st`
  if (last === 2) return `${n}nd`
  if (last === 3) return `${n}rd`
  return `${n}th`
}
