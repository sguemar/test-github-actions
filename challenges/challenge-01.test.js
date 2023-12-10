import { expect, it } from "vitest"
import { sum } from "./challenge-01"

it('should return the sum of the two passed arguments', () => {
  expect(sum(1, 2)).toBe(3)
})