/*
Loops in JavaScript:
Loops are used to execute a block of code repeatedly. In JavaScript we have following types of loops:
    - for loop: Ideal for a fixed number of iterations.
    - while loop: Executes as long as the condition is true.
    - do-while loop: Executes at least once before checking the condition.
    - for in Loop: Iterates over the properties of an object.
    - for of Loop: Iterates over the values of an iterable (e.g., arrays, strings).
    - for-each Loop: Iterates over each item in an array or collection.
*/


// a. for loop:
/* Syntax:
for (initialization; condition; increment/decrement) {
    // Code to execute
  }
*/

// Example: 
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
  }


// b. while Loop:
/*
while (condition) {
  // Code to execute
}
*/

// Example:
let i = 0;
while (i < 5) {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
}


// c. do while Loop:
/*
do {
    // Code to execute
  } while (condition);
*/

// Example:
let k = 0;
do {
  console.log(k); // Output: 0, 1, 2, 3, 4
  k++;
} while (k < 5);


// d. for in Loop:
/*
for (key in object) {
 //Code to execute
}
*/

//Example:
const person = { name: "Naresh", age: 23 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Naresh
// age: 23


// e. for of Loop:
/*
for (value of iterable) {
  // Code to execute
}
*/
const friends = ["hem", "harish", "rohan"];
for (let friend of friends) {
  console.log(friend);
}
// Output:
// hem
// harish
// rohan

// f. for each loop:
const arr = [1, 2, 3];
arr.forEach(item => console.log(item));


let data = {
  name:"Naresh",
  unitsConsumed:151
}

let {unitsConsumed: bill} = data;

if(bill<=20){
  console.log('Total Bill is: Rs.', 80)
}else if(bill<=30){
  console.log('Total Bill is: Rs.', 80 + ((bill-20)*4.5))
}else if (bill<=50){
  console.log('Total bill is: ', 80 + 10*4.5 + ((bill-30)*5) )
}else if(bill<=80){
  console.log('Total Bill is: ', 80 + 10*4.5 +20*5 + ((bill-50)*7.5) )
}else if(bill<=130){
  console.log('Total Bill is: ', 80 + 10*4.5 + 20*5 + 30*7.5 + ((bill-80)*10))
}else if(bill<=250){
  console.log('Total Bill is: ', 80 + 10*4.5 + 20*5 + 30*7.5 + 50*10 + ((bill-130)*15))
}else{
  console.log('Total Bill is: ', 80 + 10*4.5 + 20*5 + 30*7.5 + 50*10 + 120*15 + ((bill-250)*25))
}

console.log("finished\n")

