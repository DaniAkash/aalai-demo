import { expect, test } from 'bun:test'
import { pluralise } from '../src/pluralise'

test('uses the singular form for exactly one', () => {
  expect(pluralise(1, 'file', 'files')).toBe('1 file')
})

test('uses the plural form for anything else', () => {
  expect(pluralise(3, 'file', 'files')).toBe('3 files')
  expect(pluralise(0, 'file', 'files')).toBe('0 files')
  expect(pluralise(-1, 'file', 'files')).toBe('-1 files')
})
