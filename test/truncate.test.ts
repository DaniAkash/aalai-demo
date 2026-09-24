import { expect, test } from 'bun:test'
import { truncate } from '../src/truncate'

test('leaves short text alone', () => {
  expect(truncate('hello', 10)).toBe('hello')
})

test('leaves text at the maximum length alone', () => {
  expect(truncate('hello', 5)).toBe('hello')
})

test('the truncated result never exceeds max characters', () => {
  const result = truncate('hello world', 8)

  expect(result).toBe('hello w…')
  expect(result.length).toBe(8)
})
