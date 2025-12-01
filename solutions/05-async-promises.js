/**
 * Solutions - Async Programming and Promises
 */

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}`, email: `user${id}@example.com` });
    }, 100);
  });
}

async function getUserData(id) {
  const user = await fetchUser(id);
  return user;
}

async function fetchWithErrorHandling(id) {
  try {
    const user = await fetchUser(id);
    return user;
  } catch (error) {
    return { error: error.message };
  }
}

async function fetchMultipleUsers(ids) {
  const promises = ids.map(id => fetchUser(id));
  return await Promise.all(promises);
}

async function fetchWithTimeout(id, timeout) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), timeout);
  });
  
  return await Promise.race([fetchUser(id), timeoutPromise]);
}

module.exports = {
  delay,
  fetchUser,
  getUserData,
  fetchWithErrorHandling,
  fetchMultipleUsers,
  fetchWithTimeout
};
