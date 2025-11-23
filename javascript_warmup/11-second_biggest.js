#!/usr/bin/node
/* Finds the second largest argument */

const args = process.argv.slice(2) || 0;

if (args.length < 2) {
    console.log(args[0])
} else {
    console.log(args === 0 ? 0 : args.sort()[1]);
}