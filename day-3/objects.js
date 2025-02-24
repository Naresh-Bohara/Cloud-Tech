// Object properties and methods:

// Creating an Object:
// const person = {
//     name: 'Naresh',
//     age: 23,
//     greet: function() {
//       console.log('Hello, ' + this.name);
//     }
//   };
// person.greet();  

// Properties:
//   Accessing object properties:
// - Dot notation: object.property
// - Bracket notation: object['property'

const intern = {
    name: 'Naresh',
    age: 23,
    college: 'KMC'
  };
  console.log(intern.name);   // 'Naresh'
  console.log(intern['age']); // 23

  
  // Object Methods:
  const person = { name: 'Harish', age: 22 };
console.log(Object.keys(person)); // ['name', 'age']
console.log(Object.values(person)); // ['Harish', 22
console.log(Object.entries(person)); // [['name', 'Harish'], ['age', 22]] 

const target = { name: 'Harish' };
const source = { age: 22 };
const result = Object.assign(target, source);
console.log(result); // { name: 'Harish', age: 22 } 


console.log(person.hasOwnProperty('name')); // true 
Object.freeze(person);
person.age = 30;  // Doesn't change because the object is frozen
person.country = 'Canada'; // Doesn't work (new property can't be added)
person.name = 'Bob'; // Works (existing properties can be modified) 
