import { expect, test } from 'bun:test'
import { clamp } from '../src/clamp'

test('raises a value below the range', () => {
  expect(clamp(-5, 0, 10)).toBe(0)
})

test('lowers a value above the range', () => {
  expect(clamp(42, 0, 10)).toBe(10)
})

test('returns a value inside the range unchanged', () => {
  expect(clamp(5, 0, 10)).toBe(5)
})

test('returns values on either endpoint unchanged', () => {
  expect(clamp(0, 0, 10)).toBe(0)
  expect(clamp(10, 0, 10)).toBe(10)
})

test('returns the bound when both bounds are equal', () => {
  expect(clamp(-5, 3, 3)).toBe(3)
  expect(clamp(3, 3, 3)).toBe(3)
  expect(clamp(42, 3, 3)).toBe(3)
})

test('normalizes reversed bounds for values below, inside, and above the range', () => {
  for (const value of [-5, 5, 42]) {
    expect(clamp(value, 10, 0)).toBe(clamp(value, 0, 10))
  }
})

test('returns values on either endpoint when bounds are reversed', () => {
  expect(clamp(0, 10, 0)).toBe(clamp(0, 0, 10))
  expect(clamp(10, 10, 0)).toBe(clamp(10, 0, 10))
})
