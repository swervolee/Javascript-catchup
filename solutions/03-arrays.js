/**
 * Solutions - Arrays
 */

function doubleNumbers(numbers) {
  return numbers.map(num => num * 2);
}

function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

function sumArray(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

function findFirstGreaterThanTen(numbers) {
  return numbers.find(num => num > 10);
}

function allPositive(numbers) {
  return numbers.every(num => num > 0);
}

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

function getFirstAndRest(array) {
  const [first, ...rest] = array;
  return { first, rest };
}

module.exports = {
  doubleNumbers,
  filterEvenNumbers,
  sumArray,
  findFirstGreaterThanTen,
  allPositive,
  mergeArrays,
  getFirstAndRest
};
