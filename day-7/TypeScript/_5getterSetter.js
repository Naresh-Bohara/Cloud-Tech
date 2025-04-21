"use strict";
/*
class User {
    constructor(public name: string, public age:number){ }

    setName (value:string){
        this.name = value
    }

    getName(){
        return this.name
    }
}

let u1 = new User("Naresh", 23)
console.log(u1)
console.log(u1.getName())
u1.setName("pari")
console.log(u1.getName())

*/
class User {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}
let u1 = new User("Naresh", 23);
console.log(u1);
console.log(u1.name);
u1.name = "Harish";
console.log(u1);
console.log(u1.name);
console.log(u1.age);
