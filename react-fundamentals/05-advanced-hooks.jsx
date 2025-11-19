/**
 * React Fundamentals - Advanced Hooks
 * 
 * Topics covered:
 * - useContext
 * - useReducer
 * - useMemo
 * - useCallback
 * - useRef
 */

import React, { 
  useState, 
  useContext, 
  useReducer, 
  useMemo, 
  useCallback,
  useRef,
  createContext 
} from 'react';

// TODO: Create a Theme context
const ThemeContext = createContext();

// TODO: Create a ThemeProvider component
function ThemeProvider({ children }) {
  // Your code here
  // Manage theme state (light/dark)
}

// TODO: Create a component that uses useContext
function ThemedButton() {
  // Your code here
  // Use ThemeContext
}

// TODO: Create a Counter using useReducer
function CounterWithReducer() {
  // Your code here
  // Define reducer function and use useReducer
}

// TODO: Create a component that uses useMemo
function ExpensiveCalculation({ numbers }) {
  // Your code here
  // Use useMemo to memoize expensive calculation
}

// TODO: Create a component that uses useCallback
function ParentWithCallback() {
  // Your code here
  // Use useCallback to memoize callback function
}

// TODO: Create a component that uses useRef
function FocusInput() {
  // Your code here
  // Use useRef to focus input on button click
}

export {
  ThemeProvider,
  ThemeContext,
  ThemedButton,
  CounterWithReducer,
  ExpensiveCalculation,
  ParentWithCallback,
  FocusInput
};
