import { validateEmail, validateName, validatePostalCode, validateDateOfBirth, validateCity } from './validation';

describe('Validation functions', () => {
    test('validateEmail returns true for valid emails', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('user.name+tag+sorting@example.com')).toBe(true);
    });

    test('validateEmail returns false for invalid emails', () => {
        expect(validateEmail('plainaddress')).toBe(false);
        expect(validateEmail('@missingusername.com')).toBe(false);
        expect(validateEmail('test@missingdotnet')).toBe(false);

    });

    test('validateName returns true for valid names', () => {
        expect(validateName('Nawel')).toBe(true);
        expect(validateName('Jean-Pierre')).toBe(true);
        expect(validateName('Eloïse')).toBe(true);

    });

    test('validateName returns false for invalid names', () => {
        expect(validateName('John123')).toBe(false);
        expect(validateName('')).toBe(false);
        expect(validateName('!@#$%')).toBe(false);
    });

    test('validateCity returns true for valid cities', () => {
        expect(validateCity('Paris')).toBe(true);
        expect(validateCity('Saint-Denis')).toBe(true);
    });

    test('validateCity returns false for invalid cities', () => {
        expect(validateCity('Paris123')).toBe(false);
        expect(validateCity('')).toBe(false);
    });

    test('validatePostalCode returns true for valid French postal codes', () => {
        expect(validatePostalCode('75001')).toBe(true);
        expect(validatePostalCode('12345')).toBe(true);
    });

    test('validatePostalCode returns false for invalid postal codes', () => {
        expect(validatePostalCode('1234')).toBe(false);
        expect(validatePostalCode('ABCDE')).toBe(false);
        expect(validatePostalCode('1234E')).toBe(false);

    });

    test('validateDateOfBirth returns true for valid dates (18 years old)', () => {
        expect(validateDateOfBirth('2000-06-26')).toBe(true);
    });

    test('validateDateOfBirth returns false for ages under 18', () => {
        expect(validateDateOfBirth('2009-09-22')).toBe(false);
    });
    
});
