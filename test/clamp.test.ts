import { expect, test } from 'bun:test'
import { clamp } from '../src/clamp'

test('raises a value below the range', () => {
  expect(clamp(-5, 0, 10)).toBe(0)
})

test('lowers a value above the range', () => {
  expect(clamp(42, 0, 10)).toBe(10)
})
