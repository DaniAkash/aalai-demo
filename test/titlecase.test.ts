import { expect, test } from 'bun:test'
import { titleCase } from '../src/titlecase'

test('capitalises only the first letter of each word', () => {
  expect(titleCase('hello brave world')).toBe('Hello Brave World')
  expect(titleCase('the HTTP spec')).toBe('The HTTP Spec')
  expect(titleCase('iPhone sales')).toBe('IPhone Sales')
})

test('preserves repeated and boundary spaces', () => {
  expect(titleCase('  iPhone  HTTP ')).toBe('  IPhone  HTTP ')
})
