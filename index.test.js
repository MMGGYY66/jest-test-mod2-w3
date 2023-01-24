import stringLength  from './index.js';
import reverseString from './reverse.js';

test('hello length equal 5', () => {
  expect(stringLength("hello")).toBe(5);
});

test('a small or empty string has less than 1 character', () => {
  expect(() => stringLength()).toThrow();
  expect(() => stringLength()).toThrow(Error);
});

test('a big string has 10 or more characters', () => {
  expect(() => stringLength()).toThrow();
  expect(() => stringLength()).toThrow(Error);
});

test('car equal rac', () => {
  expect(reverseString("car")).toBe("rac");
});

test('book equal koob', () => {
  expect(reverseString("book")).toBe("koob");
});
