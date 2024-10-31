import {
    validateEmail,
    validateName,
    validatePostalCode,
    validateDateOfBirth,
    validateCity
} from './validation';

describe('Validation functions', () => {
    // Tests for Email Validation
    describe('validateEmail', () => {
        test('returns true for valid emails', () => {
            expect(validateEmail('test@example.com')).toBe(true);
            expect(validateEmail('user.name+tag+sorting@example.com')).toBe(true);
            expect(validateEmail('email@subdomain.example.com')).toBe(true);
        });

        test('returns false for invalid emails', () => {
            expect(validateEmail('plainaddress')).toBe(false);
            expect(validateEmail('@missingusername.com')).toBe(false);
            expect(validateEmail('test@missingdotnet')).toBe(false);
            expect(validateEmail('invalid@.com')).toBe(false);
            expect(validateEmail('invalid@com.')).toBe(false);
        });
    });

    // Tests for Name Validation
    describe('validateName', () => {
        test('returns true for valid names', () => {
            expect(validateName('Nawel')).toBe(true);
            expect(validateName('Jean-Pierre')).toBe(true);
            expect(validateName('Eloïse')).toBe(true);
            expect(validateName('Anne-Marie')).toBe(true);
        });

        test('returns false for invalid names', () => {
            expect(validateName('John123')).toBe(false);
            expect(validateName('')).toBe(false);
            expect(validateName('!@#$%')).toBe(false);
            expect(validateName('    ')).toBe(false); // Check for spaces only
        });
    });

    // Tests for City Validation
    describe('validateCity', () => {
        test('returns true for valid cities', () => {
            expect(validateCity('Paris')).toBe(true);
            expect(validateCity('Saint-Denis')).toBe(true);
            expect(validateCity('Lyon')).toBe(true);
        });

        test('returns false for invalid cities', () => {
            expect(validateCity('Paris123')).toBe(false);
            expect(validateCity('')).toBe(false);
            expect(validateCity('City!')).toBe(false); // Special characters
        });
    });

    // Tests for Postal Code Validation
    describe('validatePostalCode', () => {
        test('returns true for valid French postal codes', () => {
            expect(validatePostalCode('75001')).toBe(true);
            expect(validatePostalCode('12345')).toBe(true);
        });

        test('returns false for invalid postal codes', () => {
            expect(validatePostalCode('1234')).toBe(false);
            expect(validatePostalCode('ABCDE')).toBe(false);
            expect(validatePostalCode('1234E')).toBe(false);
            expect(validatePostalCode('')).toBe(false); // Empty input
            expect(validatePostalCode('123456')).toBe(false); // Too long
        });
    });

    // Tests for Date of Birth Validation
    describe('validateDateOfBirth', () => {
        test('returns true for valid dates (18 years old)', () => {
            expect(validateDateOfBirth('2000-06-26')).toBe(true);
            expect(validateDateOfBirth('2000-01-01')).toBe(true); // Edge case for 18th birthday
        });

        test('returns false for ages under 18', () => {
            expect(validateDateOfBirth('2009-09-22')).toBe(false);
            expect(validateDateOfBirth('2005-05-05')).toBe(true);
        });

        test('returns false for invalid date formats', () => {
            expect(validateDateOfBirth('not-a-date')).toBe(false);
            expect(validateDateOfBirth('2024-02-30')).toBe(false); // Invalid date
        });
    });
});
