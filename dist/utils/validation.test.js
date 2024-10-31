"use strict";

var _validation = require("./validation");
describe('Validation functions', () => {
  test('validateEmail returns true for valid emails', () => {
    expect((0, _validation.validateEmail)('test@example.com')).toBe(true);
    expect((0, _validation.validateEmail)('user.name+tag+sorting@example.com')).toBe(true);
  });
  test('validateEmail returns false for invalid emails', () => {
    expect((0, _validation.validateEmail)('plainaddress')).toBe(false);
    expect((0, _validation.validateEmail)('@missingusername.com')).toBe(false);
    expect((0, _validation.validateEmail)('test@missingdotnet')).toBe(false);
  });
  test('validateName returns true for valid names', () => {
    expect((0, _validation.validateName)('Nawel')).toBe(true);
    expect((0, _validation.validateName)('Jean-Pierre')).toBe(true);
    expect((0, _validation.validateName)('Eloïse')).toBe(true);
  });
  test('validateName returns false for invalid names', () => {
    expect((0, _validation.validateName)('John123')).toBe(false);
    expect((0, _validation.validateName)('')).toBe(false);
    expect((0, _validation.validateName)('!@#$%')).toBe(false);
  });
  test('validateCity returns true for valid cities', () => {
    expect((0, _validation.validateCity)('Paris')).toBe(true);
    expect((0, _validation.validateCity)('Saint-Denis')).toBe(true);
  });
  test('validateCity returns false for invalid cities', () => {
    expect((0, _validation.validateCity)('Paris123')).toBe(false);
    expect((0, _validation.validateCity)('')).toBe(false);
  });
  test('validatePostalCode returns true for valid French postal codes', () => {
    expect((0, _validation.validatePostalCode)('75001')).toBe(true);
    expect((0, _validation.validatePostalCode)('12345')).toBe(true);
  });
  test('validatePostalCode returns false for invalid postal codes', () => {
    expect((0, _validation.validatePostalCode)('1234')).toBe(false);
    expect((0, _validation.validatePostalCode)('ABCDE')).toBe(false);
    expect((0, _validation.validatePostalCode)('1234E')).toBe(false);
  });
  test('validateDateOfBirth returns true for valid dates (18 years old)', () => {
    expect((0, _validation.validateDateOfBirth)('2000-06-26')).toBe(true);
  });
  test('validateDateOfBirth returns false for ages under 18', () => {
    expect((0, _validation.validateDateOfBirth)('2009-09-22')).toBe(false);
  });
});