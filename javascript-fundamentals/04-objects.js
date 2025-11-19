/**
 * JavaScript Fundamentals - Objects
 * 
 * Topics covered:
 * - Object creation and properties
 * - Object methods
 * - Object destructuring
 * - Spread operator with objects
 * - Object.keys, Object.values, Object.entries
 */

// TODO: Create a function that creates a person object with name and age
function createPerson(name, age) {
  // Your code here - return an object with name and age properties
}

// TODO: Create a function that adds a method to an object
function addGreetMethod(person) {
  // Add a greet method that returns "Hello, my name is [name]"
  // Your code here
}

// TODO: Create a function that uses object destructuring
function getPersonInfo({ name, age, city = 'Unknown' }) {
  // Return a string with the person's info
  // Your code here
}

// TODO: Create a function that merges two objects
function mergeObjects(obj1, obj2) {
  // Your code here - use spread operator
}

// TODO: Create a function that gets all keys from an object
function getObjectKeys(obj) {
  // Your code here
}

// TODO: Create a function that converts an object to an array of [key, value] pairs
function objectToEntries(obj) {
  // Your code here
}

// TODO: Create a function that uses computed property names
function createObjectWithComputedKey(key, value) {
  // Your code here
}

module.exports = {
  createPerson,
  addGreetMethod,
  getPersonInfo,
  mergeObjects,
  getObjectKeys,
  objectToEntries,
  createObjectWithComputedKey
};
