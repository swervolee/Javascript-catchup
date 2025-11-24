#!/usr/bin/node
/* Exeutes a function the specified number of times */

exports.callMeMoby = function(x, theFunction) {
    while (x > 0) {
        theFunction();
        x--;
    }
}