#!/usr/bin/node

const a = process.argv.slice(2);

a.length === 0 ? console.log('undefined is undefined') : a.length >= 2 ? console.log(a.join(" is ")) : console.log(`${a[0]} is undefined`)