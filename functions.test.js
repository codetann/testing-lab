const {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide,
} = require("./functions");
const { test, expect, describe } = require("@jest/globals");

test("should return Hello, {name}", () => {
  expect(greeting("James")).toEqual("Hello, James");
  expect(greeting("Jill")).toEqual("Hello, Jill");
});

test("should return {num1} + {num2} ", () => {
  expect(add(1, 2)).toEqual(3);
  expect(add(5, 9)).toEqual(14);
});

describe("math functions", () => {
  test("add", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(5, 9)).toEqual(14);
  });

  test("subtract", () => {
    expect(subtract(2, 2)).toEqual(0);
    expect(subtract(10, 9)).toEqual(1);
  });

  test("divide", () => {
    expect(divide(2, 2)).toEqual(1);
    expect(divide(10, 2)).toEqual(5);
  });

  test("multiply", () => {
    expect(multiply(2, 2)).toEqual(4);
    expect(multiply(10, 2)).toEqual(20);
  });
});
