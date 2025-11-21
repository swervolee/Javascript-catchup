#!/usr/bin/node

function coma(strings, ...values) {
    // Add 'return' here to output the result of the reduction
    return strings.reduce((prev, curr) => {
        return prev + curr + (values.length ? values.shift() : '');
    });
};
const condiment = 'jam';
const meal = 'toast';
const result = coma`I like ${condiment} on my ${meal}.`;

console.log(result); 
// Expected Output: I like jam on my toast.
