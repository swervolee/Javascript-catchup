#!/usr/bin/node
/* Sums two input integers */

const [a, b] = [Number(process.argv[2]), Number(process.argv[3])] || -1;

if (a < 0 || b < 0) {
    Console.log(NaN);
    return;
}

function add(a, b) {
    console.log(a + b);
}

add(a, b);