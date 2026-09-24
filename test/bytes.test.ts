import { expect, test } from 'bun:test'
import { formatBytes } from '../src/bytes'

test('rounds to at most one decimal place', () => {
  expect(formatBytes(1536)).toBe('1.5 KB')
})

test('leaves byte counts below a kilobyte alone', () => {
  expect(formatBytes(512)).toBe('512 B')
})

test('formats zero bytes', () => {
  expect(formatBytes(0)).toBe('0 B')
})

test('omits a trailing decimal for whole units', () => {
  expect(formatBytes(1024)).toBe('1 KB')
})

test('rounds long fractional values to one decimal place', () => {
  expect(formatBytes(1234567)).toBe('1.2 MB')
})

test('clamps values above the supported unit range to gigabytes', () => {
  expect(formatBytes(2 ** 50)).toBe('1048576 GB')
})
