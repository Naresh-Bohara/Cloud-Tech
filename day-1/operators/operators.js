/**
 * a. Arithematic Operators 
 *      +, -, *, /, %
 * b. Increment or Decrement 
 *      ++, --
 * c. Assignment Operator 
 *      =, +=, -=, *=, /=, %=
 * d. String or concatination Operator 
 *      +, , 
 * e. Comparision operators 
 *      <, >, <=, >=, ==, ===, !=, !==
 * f. Logical Operators 
 *      &&, ||, !
 * g. Ternary Or Conditional 
 *      - single line if-else block 
 *      (expression)  ? true statement : false statement;
 *       value ?? defaultValue;
 * h. Spread or rest 
 *      ...
 */
let a = 10;
let b = 3;

let c = a / b;  // 3.3333.... 14 digit
console.log(c);

let d = a % b;  // 1 remainder

// 
console.log(a); // 10
a++         // a = a + 1, 11
console.log(a);
++a;        // a = a + 1, 12
console.log(a)

// let a = 12
// a = 12
console.log(a++)    // 12, post assign
// console.log(a)   // 12 output, a = 13
// a = a + 1;
// console.log(a)  // 13

// a = 13
// a = a + 1 ; // a = 14
// console.log(a);
console.log(++a)    // 14

a = 10;
a++
++a
a = a + 1;

a += 1; // a = a + 1

let x = '10'    // string 
let y = 10;     // number
let z = +x + y   // error? x + y ==> string + number => 1010
// 20 ? 

// +'10', +'10a', +'a10'
// 10, 10, 0

console.log("Value of x is: ", x)


console.log(x <= y)  // false

// only value
console.log(x == y) // true
console.log(x != y) // false

// value with datatype
console.log(x === y)    // false
console.log(x !== y)    // true

console.log((x === y) && (x == y))
// false && true => false


console.log((x === y) || (x == y))
// false || true => true


console.log(!(x === y) && (x == y))
// !false && true => true && true => true

console.log(
    (x === y) ? "x and y are equal" : 'x and y are not equal'
)

let user = {
    name: "Naresh Bohara",
    address: "Dhangadhi",
    email: "nareshbohara112@gmail.com",
    age: 23
}

let intern = {
    ...user,            // spread operator
    organization: "Cloud Tech Store",
    language: "MERN"
}

const name = "Test Name"

// Object Destructure , rest 
const {name: fullname, email, address, language, ...other} = intern;
console.log(email, address, language, fullname);

// const fullname = intern.name
// const email = intern.email;
// const address = intern.address;
// const language = intern.language;
// const other = {
//     name: intern.name,
//     age: intern.age, 
//     organization: intern.organization
// }


console.log(intern.name) // Naresh Bohara

// let age = user.age ? (user.age) : null;
// let age = user.age ?? null;
