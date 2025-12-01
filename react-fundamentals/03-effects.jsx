/**
 * React Fundamentals - useEffect Hook
 * 
 * Topics covered:
 * - useEffect hook
 * - Side effects
 * - Dependency arrays
 * - Cleanup functions
 */

import React, { useState, useEffect } from 'react';

// TODO: Create a DocumentTitle component that updates document title
function DocumentTitle({ title }) {
  // Your code here
  // Use useEffect to update document.title
}

// TODO: Create a Timer component that counts seconds
function Timer() {
  // Your code here
  // Use useEffect with setInterval
  // Don't forget cleanup!
}

// TODO: Create a DataFetcher component
function DataFetcher({ url }) {
  // Your code here
  // Fetch data when url changes
  // Show loading state and error handling
}

// TODO: Create a WindowSize component
function WindowSize() {
  // Your code here
  // Track window width and height
  // Use resize event listener
}

// TODO: Create a LocalStorageSync component
function LocalStorageSync({ storageKey, initialValue }) {
  // Your code here
  // Sync state with localStorage
}

export {
  DocumentTitle,
  Timer,
  DataFetcher,
  WindowSize,
  LocalStorageSync
};
