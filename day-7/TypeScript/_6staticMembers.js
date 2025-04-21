"use strict";
/**static members belong to the class itself, not to instances of the class. They are accessed using the class name. */
class Myjs {
    static getRandonNumber() {
        return Math.random();
    }
}
Myjs.version = "1.0";
// let m1 = new Myjs(); // Instance created (but static members are not accessed like this)
// Accessing static members:
console.log(Myjs.version); // "1.0"
console.log(Myjs.getRandonNumber()); // e.g., 0.5623...
