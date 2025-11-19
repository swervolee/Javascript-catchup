# JavaScript Fundamentals

This directory contains exercises to practice core JavaScript concepts.

## Exercises

### 01. Variables and Types
- Variable declarations (`let`, `const`, `var`)
- Primitive types
- Type checking and conversion
- Truthy/Falsy values

**Key concepts:**
```javascript
const PI = 3.14159;  // constant
let name = 'John';   // mutable variable
typeof value;        // type checking
Boolean(value);      // type conversion
```

### 02. Functions
- Function declarations vs expressions
- Arrow functions
- Default parameters
- Rest parameters
- Higher-order functions
- Closures

**Key concepts:**
```javascript
function add(a, b) { return a + b; }
const multiply = (a, b) => a * b;
function greet(name = 'Guest') { }
function sum(...numbers) { }
```

### 03. Arrays
- Array methods (`map`, `filter`, `reduce`, `find`, `every`, `some`)
- Spread operator
- Array destructuring

**Key concepts:**
```javascript
array.map(x => x * 2);
array.filter(x => x > 0);
array.reduce((acc, x) => acc + x, 0);
const [first, ...rest] = array;
```

### 04. Objects
- Object creation
- Object methods
- Object destructuring
- Spread operator with objects
- Object static methods

**Key concepts:**
```javascript
const person = { name: 'John', age: 30 };
const { name, age } = person;
const merged = { ...obj1, ...obj2 };
Object.keys(obj);
Object.entries(obj);
```

### 05. Async Programming
- Promises
- async/await
- Error handling
- Promise.all, Promise.race

**Key concepts:**
```javascript
const promise = new Promise((resolve, reject) => { });
async function fetchData() { }
await promise;
try { } catch (error) { }
Promise.all([p1, p2, p3]);
```

### 06. ES6+ Features
- Template literals
- Classes
- Optional chaining
- Nullish coalescing

**Key concepts:**
```javascript
`Hello, ${name}!`;
class Book { }
obj?.prop?.nested;
value ?? defaultValue;
```

## How to Practice

1. Open each exercise file
2. Read the comments and TODOs
3. Implement the functions
4. Run tests to verify: `npm test`
5. Check solutions if needed

## Tips

- Start with `01-variables-and-types.js` and work sequentially
- Take time to understand each concept
- Experiment with different inputs
- Read MDN documentation for deeper understanding
