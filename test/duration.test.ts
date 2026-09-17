import { expect, test } from 'bun:test'
import { formatDuration } from '../src/duration'

test('formats a duration with two-digit seconds', () => {
  expect(formatDuration(125)).toBe('2:05')
})
