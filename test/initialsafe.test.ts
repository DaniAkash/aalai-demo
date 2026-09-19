import { expect, test } from 'bun:test'
import { initialsOf } from '../src/initialsafe'

test('ignores extra whitespace between words', () => {
  expect(initialsOf('ada   lovelace')).toBe('AL')
})

test('handles non-space whitespace and surrounding whitespace', () => {
  expect(initialsOf('\tada\nbyron \r\n lovelace\t')).toBe('ABL')
})

test('returns an empty string for empty or whitespace-only input', () => {
  expect(initialsOf('')).toBe('')
  expect(initialsOf(' \t\n')).toBe('')
})
