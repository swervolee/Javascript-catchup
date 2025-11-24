#!/usr/bin/node
/* Increments and calls a function */

exports.addMeMaybe = function(num, func) {
    num++ && func(num);
}