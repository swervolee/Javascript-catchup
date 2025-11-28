/**
 * Solutions - ES6+ Features
 */

function createMessage(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  
  getInfo() {
    return `${this.title} by ${this.author}`;
  }
}

class EBook extends Book {
  constructor(title, author, fileSize) {
    super(title, author);
    this.fileSize = fileSize;
  }
  
  getInfo() {
    return `${super.getInfo()} (${this.fileSize}MB)`;
  }
}

function getAuthorName(book) {
  return book?.author?.name ?? 'Unknown';
}

function getWithDefault(value, defaultValue) {
  return value ?? defaultValue;
}

function swap(a, b) {
  return [b, a];
}

module.exports = {
  createMessage,
  Book,
  EBook,
  getAuthorName,
  getWithDefault,
  swap
};
