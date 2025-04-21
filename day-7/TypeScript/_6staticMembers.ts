/**static members belong to the class itself, not to instances of the class. They are accessed using the class name. */

class Myjs {
    static version = "1.0";

    static getRandonNumber() {
        return Math.random();
    }
}

// let m1 = new Myjs(); // Instance created (but static members are not accessed like this)

// Accessing static members:
console.log(Myjs.version);              // "1.0"
console.log(Myjs.getRandonNumber());   // e.g., 0.5623...
