#!/usr/bin/node
/* Prints a square whose dimension is argument given */

const size = Number(process.argv[2]) || -1;

if (size < 0) {
    console.log("Missing size");
}

for (i=0; i < size; i++) {
    console.log("x".repeat(size));
}