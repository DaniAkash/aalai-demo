import { expect, test } from 'bun:test'
import { capitalise } from '../src/capitalise'

test('capitalises the first character of a string', () => {
  expect(capitalise('hello world')).toBe('Hello world')
})

test('leaves the rest of the string untouched', () => {
  expect(capitalise('hello World')).toBe('Hello World')
})

test('handles an empty string', () => {
  expect(capitalise('')).toBe('')
})

test('handles a string that already starts with an uppercase letter', () => {
  expect(capitalise('Hello world')).toBe('Hello world')
})
