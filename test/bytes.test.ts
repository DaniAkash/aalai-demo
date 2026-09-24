import { expect, test } from 'bun:test'
import { formatBytes } from '../src/bytes'

test('rounds to at most one decimal place', () => {
  expect(formatBytes(1536)).toBe('1.5 KB')
})

test('leaves byte counts below a kilobyte alone', () => {
  expect(formatBytes(512)).toBe('512 B')
})

test('uses gigabytes as the largest supported unit', () => {
  expect(formatBytes(1024 ** 3)).toBe('1 GB')
  expect(formatBytes(1024 ** 4)).toBe('1024 GB')
  expect(formatBytes(2 ** 50)).toBe('1048576 GB')
})
