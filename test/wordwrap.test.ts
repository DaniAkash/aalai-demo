import { expect, test } from 'bun:test'
import { wordWrap } from '../src/wordwrap'

test('breaks text into lines no longer than the width', () => {
  expect(wordWrap('the quick brown fox jumps', 10)).toEqual(['the quick', 'brown fox', 'jumps'])
})

test('leaves short text on one line', () => {
  expect(wordWrap('hello', 10)).toEqual(['hello'])
})

test('hard-splits a word longer than the width', () => {
  expect(wordWrap('supercalifragilistic', 10)).toEqual(['supercalif', 'ragilistic'])
})

test('preserves the remainder of an overlong word', () => {
  expect(wordWrap('abcdefghijk', 4)).toEqual(['abcd', 'efgh', 'ijk'])
})

test('wraps normal words around an overlong word', () => {
  expect(wordWrap('go abcdefghijk x', 7)).toEqual(['go', 'abcdefg', 'hijk x'])
})

test('leaves a word exactly equal to the width intact', () => {
  expect(wordWrap('abcdefghij', 10)).toEqual(['abcdefghij'])
})

test('rejects invalid widths', () => {
  for (const width of [0, -1, 1.5, Number.NaN, Number.POSITIVE_INFINITY]) {
    expect(() => wordWrap('hello', width)).toThrow(RangeError)
  }
})
