/**
 * JavaScript Fundamentals - Functions
 * 
 * Topics covered:
 * - Function declarations vs expressions
 * - Arrow functions
 * - Default parameters
 * - Rest parameters
 * - Higher-order functions
 */

// TODO: Create a function that adds two numbers
function add(a, b) {
  // Your code here
}

// TODO: Create an arrow function that multiplies two numbers
const multiply = null; // Replace null with your arrow function

// TODO: Create a function with default parameters
function greet(name = 'Guest') {
  // Your code here - return a greeting message
}

// TODO: Create a function that uses rest parameters to sum all arguments
function sum(...numbers) {
  // Your code here
}

// TODO: Create a higher-order function that takes a function and a value
// and applies the function to the value twice
function applyTwice(fn, value) {
  // Your code here
}

// TODO: Create a function that returns another function (closure example)
function createCounter() {
  // Your code here - should return a function that increments and returns a count
}

module.exports = {
  add,
  multiply,
  greet,
  sum,
  applyTwice,
  createCounter
};
