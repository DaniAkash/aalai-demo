/** Formats a duration in seconds as `m:ss`, or `h:mm:ss` past an hour. */
export const formatDuration = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = totalSeconds % 60
  if (hours > 0) {
    return `${hours}:${minutes}:${String(seconds).padStart(2, '0')}`
  }
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}
