/**
 * Solutions - Functions
 */

function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;

function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

function applyTwice(fn, value) {
  return fn(fn(value));
}

function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

module.exports = {
  add,
  multiply,
  greet,
  sum,
  applyTwice,
  createCounter
};
