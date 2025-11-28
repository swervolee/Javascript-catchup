const {
  doubleNumbers,
  filterEvenNumbers,
  sumArray,
  findFirstGreaterThanTen,
  allPositive,
  mergeArrays,
  getFirstAndRest
} = require('../03-arrays');

describe('Arrays', () => {
  describe('doubleNumbers', () => {
    test('should double each number', () => {
      expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
      expect(doubleNumbers([])).toEqual([]);
    });
  });
  
  describe('filterEvenNumbers', () => {
    test('should filter even numbers', () => {
      expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
      expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
    });
  });
  
  describe('sumArray', () => {
    test('should sum all numbers', () => {
      expect(sumArray([1, 2, 3, 4])).toBe(10);
      expect(sumArray([])).toBe(0);
    });
  });
  
  describe('findFirstGreaterThanTen', () => {
    test('should find first number greater than 10', () => {
      expect(findFirstGreaterThanTen([5, 8, 12, 15])).toBe(12);
      expect(findFirstGreaterThanTen([1, 2, 3])).toBeUndefined();
    });
  });
  
  describe('allPositive', () => {
    test('should check if all numbers are positive', () => {
      expect(allPositive([1, 2, 3])).toBe(true);
      expect(allPositive([1, -2, 3])).toBe(false);
    });
  });
  
  describe('mergeArrays', () => {
    test('should merge two arrays', () => {
      expect(mergeArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
      expect(mergeArrays([], [1])).toEqual([1]);
    });
  });
  
  describe('getFirstAndRest', () => {
    test('should destructure array', () => {
      expect(getFirstAndRest([1, 2, 3, 4])).toEqual({ first: 1, rest: [2, 3, 4] });
      expect(getFirstAndRest([1])).toEqual({ first: 1, rest: [] });
    });
  });
});
