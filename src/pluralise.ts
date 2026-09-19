/** Returns the singular or plural form based on the count. */
export const pluralise = (count: number, singular: string, plural: string): string =>
  `${count} ${plural}`
