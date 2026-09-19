import { expect, test } from 'bun:test'
import { formatBytes } from '../src/bytes'

test('rounds to at most one decimal place', () => {
  expect(formatBytes(1600)).toBe('1.6 KB')
  expect(formatBytes(1536)).toBe('1.5 KB')
  expect(formatBytes(1024)).toBe('1 KB')
})

test('leaves byte counts below a kilobyte alone', () => {
  expect(formatBytes(512)).toBe('512 B')
})
