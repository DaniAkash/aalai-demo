import { expect, test } from 'bun:test'
import { formatDuration } from '../src/duration'

test('formats a duration with two-digit seconds', () => {
  expect(formatDuration(125)).toBe('2:05')
})

test('pads seconds under ten so a timer does not read as going backwards', () => {
  expect(formatDuration(65)).toBe('1:05')
  expect(formatDuration(69)).toBe('1:09')
  expect(formatDuration(70)).toBe('1:10')
})

test('a whole minute still shows its seconds', () => {
  expect(formatDuration(60)).toBe('1:00')
  expect(formatDuration(0)).toBe('0:00')
})
