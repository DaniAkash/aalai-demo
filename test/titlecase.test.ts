import { expect, test } from 'bun:test'
import { titleCase } from '../src/titlecase'

test('capitalises only the first letter of each word', () => {
  expect(titleCase('hello brave world')).toBe('Hello Brave World')
})
