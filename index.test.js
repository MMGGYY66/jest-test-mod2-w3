const stringLength = require('./index.js');

test('hello length equal 5', () => {
  expect(stringLength("hello")).toBe(5);
});
