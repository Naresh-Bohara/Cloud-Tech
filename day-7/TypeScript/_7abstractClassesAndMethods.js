"use strict";
// abstract clases and methods 
/*
An abstract class is a blueprint for other classes. It cannot be instantiated directly. It may contain:
- Concrete members (implemented)
- Abstract members (declared but not implemented)
- Use abstract when you want to enforce a structure in derived classes.
*/
class CookingEssentials {
    constructor(gas, gasName) {
        this.gas = gas;
        this.gasName = gasName;
    }
}
class Dal extends CookingEssentials {
    cook() {
        console.log(`Cooking dal using ${this.gasName}`);
    }
}
class Tarkari extends CookingEssentials {
    cook() {
        console.log(`Cooking tarkari with ${this.gas} kg of ${this.gasName}`);
    }
}
// let c = new CookingEssentials(); ❌ Error: Cannot create instance of abstract class
/*

class CookingEssentials {
    constructor(protected gas:number, protected gasName: string){ }
}

class Dal extends CookingEssentials {
    
}

class Tarkari extends CookingEssentials {

}

*/
