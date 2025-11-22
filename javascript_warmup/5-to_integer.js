#!/usr/bin/node

/*Convert given argument into a number and print it or print
that the argument given is not a number (NaN)*/

process.argv.length > 2 && typeof(process.argv[2]) !== NaN ? console.log(`My number: ${Number(process.argv[2])}`) : console.log("Not a number")