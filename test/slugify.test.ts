import { expect, test } from 'bun:test'
import { slugify } from '../src/slugify'

test('does not leave leading or trailing separators', () => {
  expect(slugify('  Hello World!  ')).toBe('hello-world')
})
