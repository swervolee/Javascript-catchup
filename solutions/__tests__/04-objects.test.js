const {
  createPerson,
  addGreetMethod,
  getPersonInfo,
  mergeObjects,
  getObjectKeys,
  objectToEntries,
  createObjectWithComputedKey
} = require('../04-objects');

describe('Objects', () => {
  describe('createPerson', () => {
    test('should create person object', () => {
      const person = createPerson('Alice', 25);
      expect(person).toEqual({ name: 'Alice', age: 25 });
    });
  });
  
  describe('addGreetMethod', () => {
    test('should add greet method', () => {
      const person = { name: 'Bob', age: 30 };
      addGreetMethod(person);
      expect(person.greet()).toBe('Hello, my name is Bob');
    });
  });
  
  describe('getPersonInfo', () => {
    test('should return person info with all fields', () => {
      const result = getPersonInfo({ name: 'Alice', age: 25, city: 'NYC' });
      expect(result).toBe('Alice is 25 years old and lives in NYC');
    });
    
    test('should use default city', () => {
      const result = getPersonInfo({ name: 'Bob', age: 30 });
      expect(result).toBe('Bob is 30 years old and lives in Unknown');
    });
  });
  
  describe('mergeObjects', () => {
    test('should merge two objects', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { c: 3, d: 4 };
      expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });
  });
  
  describe('getObjectKeys', () => {
    test('should return object keys', () => {
      expect(getObjectKeys({ a: 1, b: 2 })).toEqual(['a', 'b']);
    });
  });
  
  describe('objectToEntries', () => {
    test('should convert object to entries', () => {
      expect(objectToEntries({ a: 1, b: 2 })).toEqual([['a', 1], ['b', 2]]);
    });
  });
  
  describe('createObjectWithComputedKey', () => {
    test('should create object with computed key', () => {
      expect(createObjectWithComputedKey('myKey', 'myValue')).toEqual({ myKey: 'myValue' });
    });
  });
});
