const { checkType, stringToNumber, isTruthy } = require('../01-variables-and-types');

describe('Variables and Types', () => {
  describe('checkType', () => {
    test('should return correct type for string', () => {
      expect(checkType('hello')).toBe('string');
    });
    
    test('should return correct type for number', () => {
      expect(checkType(42)).toBe('number');
    });
    
    test('should return correct type for boolean', () => {
      expect(checkType(true)).toBe('boolean');
    });
  });
  
  describe('stringToNumber', () => {
    test('should convert string to number', () => {
      expect(stringToNumber('42')).toBe(42);
    });
    
    test('should handle decimal strings', () => {
      expect(stringToNumber('3.14')).toBe(3.14);
    });
  });
  
  describe('isTruthy', () => {
    test('should return true for truthy values', () => {
      expect(isTruthy(1)).toBe(true);
      expect(isTruthy('hello')).toBe(true);
      expect(isTruthy([])).toBe(true);
    });
    
    test('should return false for falsy values', () => {
      expect(isTruthy(0)).toBe(false);
      expect(isTruthy('')).toBe(false);
      expect(isTruthy(null)).toBe(false);
    });
  });
});
