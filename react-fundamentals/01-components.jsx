/**
 * React Fundamentals - Components
 * 
 * Topics covered:
 * - Functional components
 * - JSX syntax
 * - Props
 * - Component composition
 */

import React from 'react';

// TODO: Create a simple Welcome component that displays "Welcome to React!"
function Welcome() {
  // Your code here
}

// TODO: Create a Greeting component that accepts a 'name' prop
function Greeting({ name }) {
  // Your code here - display "Hello, {name}!"
}

// TODO: Create a Card component that accepts 'title' and 'content' props
function Card({ title, content }) {
  // Your code here
}

// TODO: Create a UserProfile component that displays user information
// It should accept props: name, email, and avatar (optional)
function UserProfile({ name, email, avatar }) {
  // Your code here
}

// TODO: Create a Button component with children and onClick handler
function Button({ children, onClick, variant = 'primary' }) {
  // Your code here
}

export {
  Welcome,
  Greeting,
  Card,
  UserProfile,
  Button
};
