import { test, expect } from "vitest";
import { sumResources } from "./main.js";

test("should return the sum of resource values", () => {
    const expected = 23;
    const actual = sumResources([2, 4, 1, 8, 3, 5]);
    expect(actual).toBe(expected);
  });
  
test("should work with negative numbers", () => {
    const expected = 2;
    const actual = sumResources([-1, 5, -10, 3, 7, -2]);
    expect(actual).toBe(expected);
  });

test("should return 0 for empty array", () => {
    const expected = 0;
    const actual = sumResources([]);
    expect(actual).toBe(expected);
  });

test("should work with negative sum", () => {
    const expected = -19;
    const actual = sumResources([-6, -3, -9, -1]);
    expect(actual).toBe(expected);
  });


