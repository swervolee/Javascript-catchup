/**
 * Solutions - Variables and Types
 */

const PI = 3.14159;
let userName = 'Developer';

function checkType(value) {
  return typeof value;
}

function stringToNumber(str) {
  return Number(str);
}

function isTruthy(value) {
  return Boolean(value);
}

module.exports = {
  checkType,
  stringToNumber,
  isTruthy
};
