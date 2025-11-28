/**
 * JavaScript Fundamentals - ES6+ Features
 * 
 * Topics covered:
 * - Template literals
 * - Destructuring
 * - Classes
 * - Modules (import/export)
 * - Optional chaining
 * - Nullish coalescing
 */

// TODO: Create a function that uses template literals
function createMessage(name, age) {
  // Return a message using template literals
  // Your code here
}

// TODO: Create a class for a Book with title and author
class Book {
  // Your code here
}

// TODO: Create a class that extends Book
class EBook extends Book {
  // Add a fileSize property
  // Your code here
}

// TODO: Create a function that uses optional chaining
function getAuthorName(book) {
  // Safely access book?.author?.name
  // Your code here
}

// TODO: Create a function that uses nullish coalescing
function getWithDefault(value, defaultValue) {
  // Use ?? operator
  // Your code here
}

// TODO: Create a function that swaps two variables using destructuring
function swap(a, b) {
  // Return [b, a] using destructuring
  // Your code here
}

module.exports = {
  createMessage,
  Book,
  EBook,
  getAuthorName,
  getWithDefault,
  swap
};
