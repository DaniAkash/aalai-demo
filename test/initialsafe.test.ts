import { expect, test } from 'bun:test'
import { initialsOf } from '../src/initialsafe'

test('ignores extra whitespace between words', () => {
  expect(initialsOf('ada   lovelace')).toBe('AL')
})
