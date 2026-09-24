import { expect, test } from 'bun:test'
import { initialsOf } from '../src/initialsafe'

test('returns the uppercased first letter of a single-word name', () => {
  expect(initialsOf('Prince')).toBe('P')
  expect(initialsOf('prince')).toBe('P')
})

test('returns the initials of a multi-word name', () => {
  expect(initialsOf('Ada Lovelace')).toBe('AL')
})

test('ignores extra whitespace between words', () => {
  expect(initialsOf('ada   lovelace')).toBe('AL')
  expect(initialsOf('ada\t\n  lovelace')).toBe('AL')
})

test('returns an empty string for blank input', () => {
  expect(initialsOf('')).toBe('')
  expect(initialsOf('   ')).toBe('')
  expect(initialsOf('\t\n')).toBe('')
})
