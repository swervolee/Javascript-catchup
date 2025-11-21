#!/usr/bin/node

function* countDown(n) {
    while (n > 0) {
        yield n--;
    }
}

function* outerGenerator() {
    yield* countDown(5);
}

const generator = outerGenerator();
console.log(generator.next().value);