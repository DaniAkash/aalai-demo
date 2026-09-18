/** Clamps a number into the inclusive range [min, max]. */
export const clamp = (value: number, min: number, max: number): number => {
  if (value < min) {
    return min
  }
  return value
}
