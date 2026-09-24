/** Clamps a number into the inclusive range [min, max]. */
export const clamp = (value: number, min: number, max: number): number => {
  if (!Number.isFinite(value)) {
    throw new RangeError('value must be a finite number')
  }
  if (!Number.isFinite(min)) {
    throw new RangeError('min must be a finite number')
  }
  if (!Number.isFinite(max)) {
    throw new RangeError('max must be a finite number')
  }

  if (value < min) {
    return min
  }
  if (value > max) {
    return max
  }
  return value
}
