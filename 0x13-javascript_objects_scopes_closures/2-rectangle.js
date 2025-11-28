#!/usr/bin/node
/* Creates a rectangle class */

module.exports = class Rectangle {
    constructor(w, h) {
        if (w && h > 0) {
            this.width = w;
            this.height = h;
        }
    }
}