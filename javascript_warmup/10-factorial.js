#!/usr/bin/node
/* Given a number, finds it's factorial recurively */

const a = Number(process.argv[2]) || 1

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(a));