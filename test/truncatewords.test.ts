import { expect, test } from 'bun:test'
import { truncateWords } from '../src/truncatewords'

test('marks shortened text with an ellipsis', () => {
  expect(truncateWords('one two three four', 2)).toBe('one two…')
})

test('leaves short text untouched', () => {
  expect(truncateWords('one two', 5)).toBe('one two')
})
