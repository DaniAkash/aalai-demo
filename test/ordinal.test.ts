import { expect, test } from 'bun:test'
import { ordinal } from '../src/ordinal'

test('uses st, nd and rd where they apply', () => {
  expect([ordinal(1), ordinal(2), ordinal(3)]).toEqual(['1st', '2nd', '3rd'])
})

test('uses th for the teens', () => {
  expect([ordinal(11), ordinal(12), ordinal(13)]).toEqual(['11th', '12th', '13th'])
})
