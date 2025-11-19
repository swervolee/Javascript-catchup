/**
 * React Fundamentals - Custom Hooks
 * 
 * Topics covered:
 * - Creating custom hooks
 * - Hook composition
 * - Reusable logic
 */

import { useState, useEffect } from 'react';

// TODO: Create a custom hook for form input handling
function useInput(initialValue = '') {
  // Your code here
  // Return value, setValue, and reset function
}

// TODO: Create a custom hook for fetching data
function useFetch(url) {
  // Your code here
  // Return data, loading, and error states
}

// TODO: Create a custom hook for local storage
function useLocalStorage(key, initialValue) {
  // Your code here
  // Sync state with localStorage
}

// TODO: Create a custom hook for toggle functionality
function useToggle(initialValue = false) {
  // Your code here
  // Return value and toggle function
}

// TODO: Create a custom hook for debouncing values
function useDebounce(value, delay) {
  // Your code here
  // Return debounced value
}

// TODO: Create a custom hook for window dimensions
function useWindowSize() {
  // Your code here
  // Return width and height
}

export {
  useInput,
  useFetch,
  useLocalStorage,
  useToggle,
  useDebounce,
  useWindowSize
};
