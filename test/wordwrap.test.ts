import { expect, test } from 'bun:test'
import { wordWrap } from '../src/wordwrap'

test('breaks text into lines no longer than the width', () => {
  expect(wordWrap('the quick brown fox jumps', 10)).toEqual(['the quick', 'brown fox', 'jumps'])
})

test('leaves short text on one line', () => {
  expect(wordWrap('hello', 10)).toEqual(['hello'])
})
