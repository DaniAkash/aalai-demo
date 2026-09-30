/** Capitalises the first letter of every word. */
export const titleCase = (text: string): string =>
  text
    .split(' ')
    .map((word) =>
      word === '' ? word : word[0]!.toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(' ')
