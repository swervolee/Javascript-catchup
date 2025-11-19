/**
 * JavaScript Fundamentals - Async Programming and Promises
 * 
 * Topics covered:
 * - Promises
 * - async/await
 * - Error handling with try/catch
 * - Promise.all, Promise.race
 */

// TODO: Create a function that returns a promise that resolves after a delay
function delay(ms) {
  // Your code here
}

// TODO: Create a function that simulates fetching user data (returns a promise)
function fetchUser(id) {
  // Return a promise that resolves with a user object after 100ms
  // Your code here
}

// TODO: Create an async function that uses await
async function getUserData(id) {
  // Use await to get user data from fetchUser
  // Your code here
}

// TODO: Create a function that handles promise errors
async function fetchWithErrorHandling(id) {
  // Use try/catch to handle errors
  // Your code here
}

// TODO: Create a function that uses Promise.all
async function fetchMultipleUsers(ids) {
  // Fetch multiple users concurrently using Promise.all
  // Your code here
}

// TODO: Create a function that uses Promise.race
async function fetchWithTimeout(id, timeout) {
  // Race between fetchUser and a timeout promise
  // Your code here
}

module.exports = {
  delay,
  fetchUser,
  getUserData,
  fetchWithErrorHandling,
  fetchMultipleUsers,
  fetchWithTimeout
};
