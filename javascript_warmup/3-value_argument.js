#!/usr/bin/node
/*Prints the number of arguments passed to it*/

const { argv } = require('process');

if (process.argv[2] === undefined) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}