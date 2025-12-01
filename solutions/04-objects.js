/**
 * Solutions - Objects
 */

function createPerson(name, age) {
  return { name, age };
}

function addGreetMethod(person) {
  person.greet = function() {
    return `Hello, my name is ${this.name}`;
  };
  return person;
}

function getPersonInfo({ name, age, city = 'Unknown' }) {
  return `${name} is ${age} years old and lives in ${city}`;
}

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function getObjectKeys(obj) {
  return Object.keys(obj);
}

function objectToEntries(obj) {
  return Object.entries(obj);
}

function createObjectWithComputedKey(key, value) {
  return { [key]: value };
}

module.exports = {
  createPerson,
  addGreetMethod,
  getPersonInfo,
  mergeObjects,
  getObjectKeys,
  objectToEntries,
  createObjectWithComputedKey
};
