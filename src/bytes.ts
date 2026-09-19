/** Formats a byte count as a human readable string. */
export const formatBytes = (bytes: number): string => {
  const units = ['B', 'KB', 'MB', 'GB']
  let value = bytes
  let unit = 0
  while (value >= 1024) {
    value = value / 1024
    unit = unit + 1
  }
  const roundedValue = Math.round(value * 10) / 10
  return `${roundedValue} ${units[unit]}`
}
