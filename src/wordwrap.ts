/** Wraps text so no line exceeds `width` characters. */
export const wordWrap = (text: string, width: number): string[] => {
  if (!Number.isInteger(width) || width <= 0) {
    throw new RangeError('width must be a positive integer')
  }

  const words = text.split(' ')
  const lines: string[] = []
  let line = ''

  for (const word of words) {
    if (word.length > width) {
      if (line !== '') {
        lines.push(line)
        line = ''
      }

      let offset = 0
      while (offset + width <= word.length) {
        lines.push(word.slice(offset, offset + width))
        offset += width
      }
      line = word.slice(offset)
      continue
    }

    const candidate = line === '' ? word : `${line} ${word}`
    if (candidate.length <= width) {
      line = candidate
    } else {
      lines.push(line)
      line = word
    }
  }

  if (line !== '' || lines.length === 0) {
    lines.push(line)
  }
  return lines
}
