import { expect, test } from 'bun:test'
import { clamp } from '../src/clamp'

test('raises a value below the range', () => {
  expect(clamp(-5, 0, 10)).toBe(0)
})

test('lowers a value above the range', () => {
  expect(clamp(42, 0, 10)).toBe(10)
})

test('leaves a value inside the range unchanged', () => {
  expect(clamp(5, 0, 10)).toBe(5)
})

test('leaves values at the inclusive bounds unchanged', () => {
  expect(clamp(0, 0, 10)).toBe(0)
  expect(clamp(10, 0, 10)).toBe(10)
})

const nonFiniteCases = [
  ['value', [NaN, 0, 10]],
  ['min', [5, NaN, 10]],
  ['max', [5, 0, NaN]],
  ['value', [Infinity, 0, 10]],
  ['value', [-Infinity, 0, 10]],
  ['min', [5, Infinity, 10]],
  ['min', [5, -Infinity, 10]],
  ['max', [5, 0, Infinity]],
  ['max', [5, 0, -Infinity]],
] as const

for (const [argument, args] of nonFiniteCases) {
  test(`rejects non-finite ${argument}: ${args.join(', ')}`, () => {
    const invokeClamp = () => clamp(...args)

    expect(invokeClamp).toThrow(RangeError)
    expect(invokeClamp).toThrow(argument)
  })
}

test('validates non-finite arguments in parameter order', () => {
  expect(() => clamp(NaN, NaN, NaN)).toThrow('value')
  expect(() => clamp(5, NaN, NaN)).toThrow('min')
})
