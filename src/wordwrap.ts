/** Wraps text so no line exceeds `width` characters. */
export const wordWrap = (text: string, width: number): string[] => {
  const words = text.split(' ')
  const lines: string[] = []
  let line = ''
  for (const word of words) {
    line = line === '' ? word : `${line} ${word}`
  }
  lines.push(line)
  return lines
}
