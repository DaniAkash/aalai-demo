import { expect, test } from 'bun:test'
import { initials } from '../src/text/initials'

test('takes the first and last initial only', () => {
  expect(initials('Ada Byron King Lovelace')).toBe('AL')
})

test('handles a single name', () => {
  expect(initials('Ada')).toBe('A')
})
