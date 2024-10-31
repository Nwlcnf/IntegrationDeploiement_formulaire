"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePostalCode = exports.validateName = exports.validateEmail = exports.validateDateOfBirth = exports.validateCity = void 0;
const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};
exports.validateEmail = validateEmail;
const validateName = name => {
  return /^[a-zA-ZÀ-ÿ' -]+$/.test(name);
};
exports.validateName = validateName;
const validateCity = city => {
  return /^[a-zA-ZÀ-ÿ' -]+$/.test(city);
};
exports.validateCity = validateCity;
const validatePostalCode = codePostal => {
  return /^[0-9]{5}$/.test(codePostal);
};
exports.validatePostalCode = validatePostalCode;
const validateDateOfBirth = dateNaissance => {
  const birthDate = new Date(dateNaissance);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
    age--;
  }
  return age >= 18;
};
exports.validateDateOfBirth = validateDateOfBirth;