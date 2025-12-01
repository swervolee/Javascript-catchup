const { add, multiply, greet, sum, applyTwice, createCounter } = require('../02-functions');

describe('Functions', () => {
  describe('add', () => {
    test('should add two numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
    });
  });
  
  describe('multiply', () => {
    test('should multiply two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(-2, 3)).toBe(-6);
    });
  });
  
  describe('greet', () => {
    test('should greet with provided name', () => {
      expect(greet('Alice')).toBe('Hello, Alice!');
    });
    
    test('should use default name', () => {
      expect(greet()).toBe('Hello, Guest!');
    });
  });
  
  describe('sum', () => {
    test('should sum multiple numbers', () => {
      expect(sum(1, 2, 3, 4)).toBe(10);
      expect(sum()).toBe(0);
      expect(sum(5)).toBe(5);
    });
  });
  
  describe('applyTwice', () => {
    test('should apply function twice', () => {
      const double = x => x * 2;
      expect(applyTwice(double, 3)).toBe(12);
    });
  });
  
  describe('createCounter', () => {
    test('should create a counter function', () => {
      const counter = createCounter();
      expect(counter()).toBe(1);
      expect(counter()).toBe(2);
      expect(counter()).toBe(3);
    });
    
    test('should create independent counters', () => {
      const counter1 = createCounter();
      const counter2 = createCounter();
      expect(counter1()).toBe(1);
      expect(counter2()).toBe(1);
      expect(counter1()).toBe(2);
    });
  });
});
