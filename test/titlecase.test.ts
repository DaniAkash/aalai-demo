import { expect, test } from 'bun:test'
import { titleCase } from '../src/titlecase'

test('capitalises only the first letter of each word', () => {
  expect(titleCase('hello brave world')).toBe('Hello Brave World')
  expect(titleCase('hELlo bRave')).toBe('HELlo BRave')
})

test('handles empty input and preserves spaces', () => {
  expect(titleCase('')).toBe('')
  expect(titleCase('  hello   brave  ')).toBe('  Hello   Brave  ')
})
