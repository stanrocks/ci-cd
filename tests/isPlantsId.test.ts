/* eslint-disable no-undef */
const helpers = require('../src/ts/base/helpers');

test('check 1', () => {
  // should be `...toBe(true)`;
  // intentionally breaking this test to see if github workflow `run test` will fail
  expect(helpers.isPlantsId('1')).toBe(false);
});

test('check 0', () => {
  expect(helpers.isPlantsId('0')).toBe(false);
});

test('check 30', () => {
  expect(helpers.isPlantsId('30')).toBe(false);
});

test('check shubaduba', () => {
  expect(helpers.isPlantsId('shubaduba')).toBe(false);
});

test('check undefined', () => {
  expect(helpers.isPlantsId(undefined)).toBe(false);
});

test('check integer', () => {
  expect(helpers.isPlantsId(10)).toBe(false);
});
