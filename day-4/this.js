// function show() {
//     console.log(this); // Window (in browsers) OR global (in Node.js)
//   }
//   show();
//   "use strict";
//   function strictShow() {
//     console.log(this); // undefined
//   }
//   strictShow();

// const user = {
//     name: "Naresh",
//     greet() {
//       console.log(`Hello, ${this.name}`); // "Hello, Naresh"
//     },
//   };
//   user.greet();
  

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//     greet() {
//       console.log(`Hello, ${this.name}`);
//     }
//   }
//   const p1 = new Person("Naresh");
//   p1.greet(); // "Hello, Naresh"
  

// function showMessage(role) {
//     console.log(`${this.name} is a ${role}`);
//   }
//   const user = { name: "Naresh" };
//   // Using `call()`
//   showMessage.call(user, "Developer"); // "Naresh is a Developer"
//   // Using `apply()`
//   showMessage.apply(user, ["Engineer"]); // "Naresh is an Engineer"
//   // Using `bind()`
//   const boundFn = showMessage.bind(user, "Tech Lead");
//   boundFn(); // "Naresh is a Tech Lead"
  