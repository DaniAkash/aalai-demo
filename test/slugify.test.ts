import { expect, test } from 'bun:test'
import { slugify } from '../src/slugify'

test('lowercases text and preserves ASCII letters and digits', () => {
  expect(slugify('Hello World 123')).toBe('hello-world-123')
})

test('collapses internal separator runs to one hyphen', () => {
  expect(slugify('Hello -- world!')).toBe('hello-world')
  expect(slugify('one \t--& two...___three')).toBe('one-two-three')
})

test('does not leave leading or trailing separators', () => {
  expect(slugify('  leading & trailing  ')).toBe('leading-trailing')
  expect(slugify('---Hello World!!!')).toBe('hello-world')
})

test('returns an empty string for empty or separator-only input', () => {
  expect(slugify('')).toBe('')
  expect(slugify(' -- & ... \t ')).toBe('')
})
