/**
 * React Fundamentals - Forms
 * 
 * Topics covered:
 * - Controlled components
 * - Form submission
 * - Form validation
 * - Multiple inputs
 */

import React, { useState } from 'react';

// TODO: Create a LoginForm component
function LoginForm() {
  // Your code here
  // Should have email and password fields
  // Handle form submission
}

// TODO: Create a RegistrationForm component
function RegistrationForm() {
  // Your code here
  // Should have: username, email, password, confirm password
  // Include basic validation
}

// TODO: Create a ContactForm component
function ContactForm() {
  // Your code here
  // Should have: name, email, message (textarea)
  // Show success message after submission
}

// TODO: Create a SearchBar component
function SearchBar({ onSearch }) {
  // Your code here
  // Should call onSearch when user types (debounced)
}

export {
  LoginForm,
  RegistrationForm,
  ContactForm,
  SearchBar
};
