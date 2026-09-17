import { expect, test } from 'bun:test'
import { truncate } from '../src/truncate'

test('leaves short text alone', () => {
  expect(truncate('hello', 10)).toBe('hello')
})

test('the truncated result never exceeds max characters', () => {
  expect(truncate('hello world', 8).length).toBe(8)
})
