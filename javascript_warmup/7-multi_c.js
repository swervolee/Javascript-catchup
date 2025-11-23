#!/usr/bin/node
/* Prints x times the phrase 'C is fun' where x is given argument */

const times = Number(process.argv[2]) || -1;

/* times === -1 ? console.log("Missing number of occurencies") : console.log(Array(times).fill("C is cool").join("\n")); */

if (times < 0) {
    console.log("Missing number of occurencies || Number of occurencies cannot be negative");
} else {
    const phrase = Array(times).fill("C is fun");
    console.log(phrase.join('\n'));
}