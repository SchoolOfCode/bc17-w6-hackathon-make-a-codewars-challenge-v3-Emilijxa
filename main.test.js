import { test, expect } from "vitest";
import { sumResources } from "./main.js";
import { convertTemperature } from "./main.js";




// SUM OF ARRAYS TEST CASES

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




// TEMPERATURE CONVERTER TEST CASES

test("should correctly convert if it is 0, freezing point of water", () => {
  const expected = 32;
  const actual = convertTemperature(0);
  expect(actual).toBe(expected);
});


test("should correctly convert if it is human body temperature", () => {
  const expected = 98.6;
  const actual = convertTemperature(37);
  expect(actual).toBe(expected);
});


test("should correctly convert if it is room temperature", () => {
  const expected = 68;
  const actual = convertTemperature(20);
  expect(actual).toBe(expected);
});


test("should correctly convert if it is boiling hot water", () => {
  const expected = 212;
  const actual = convertTemperature(100);
  expect(actual).toBe(expected);
});


test("should correctly convert if it is absolutely 0", () => {
  const expected = -459.4;
  const actual = convertTemperature(-273);
  expect(actual).toBe(expected);
});

