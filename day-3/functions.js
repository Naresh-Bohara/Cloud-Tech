/*

// Function is a block of code designed to perform a particular task. It allows code reuseability, modularity, and maintainability.

// function declaration(function defination or function statement):
-> A function declaration defines fea named function that can be called anywhere in the code (due to hoisting).

// syntex: 
function functionName(parameters){
// function body
return value;
}



// Example:
function square(num){
    return num*num; 
    }
    console.log(square(5));

characteristics:
- hoisted: can be called before it is defined.
- more readble, especially in larger codebases.
- used for defining reusable, named functions.

use cases:
- best dor defining helper function in utility modules.
- used in controllers in express(defining apis logic)
- ideal for recursive function

 */

// function changeValue(num){
//     num = 23;
// }
// let x = 24;
// changeValue(x);
// console.log(x);

// For example:
const factorial = function fac(n){
    return n<2 ? 1: n*fac(n-1);
    }
    console.log(factorial(3)); // output: 6
    
    
    
    
    

// function modifyBook(book){
//     book.title = "Champa";
//     }
//     const famBook = {
//     title: "Munamadan",
//     author: "Laxmi Prasad Devkota"
//     };
//     console.log(famBook.title);		// output: Munamadan 
//     modifyBook(famBook);
//     console.log(famBook.title);		// output: Champa

// function modifyArray(arr){
//     arr[0] = 12;
// }
// const numbers= [32];
// console.log(numbers[0]);    // 32
// modifyArray(numbers);
// console.log(numbers[0]);    // 12 (modified)

// function addSquares(a, b){
//     function square(x){
//         return x*x;
//     }
//     return square(a) + square(b);
// }
// console.log(addSquares(4, 5));  // output: 41

// const myFunc = function(){
//     console.log("Hello, from function Expression")
//     } 

// const factorial = function fac(n){
//     return n<2 ? 1: n*fac(n-1);
// }

// console.log(factorial(3));

// const add = function (x, y) {
//     return x + y;
//     };
//     console.log(add(10, 20)); // 30 

    // arrow function:
    // const greet = ()=>{
    //     console.log("Hello, from arrow function");
    // };
    // greet();

    //single parameter:
    // const greet = name=> `Hello, ${name}`;
    // console.log(greet("Naresh"));

    // multiple parameters:
    // const multiply = (a, b)=>a*b;
    // console.log(multiply(2, 3)) //output 6


//     Multiline function (requires {} and return ):
// const sum = (a, b) =>{
// let result = a+b;
// return result;
// }
// console.log(sum(10, 5)); //15

//returning an object (wrap object in ()):
// const getUser = (name, age)=>({
//     name, age
// })
// console.log(getUser("Naresh", 23)); // output: { name: 'Naresh', age: 23 }

// IIFE:
// (function () {
//     console.log("IIFE executed!");
//   })();  

//   (() => {
//     console.log("Arrow Function IIFE!");
//   })();

  
//   const username = "Naresh";
// (function () {
// const username = "Admin";
// console.log(username); // Admin
// })();
// console.log(username); // Naresh 


// (async function () {
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const result = await data.json();
//     console.log(result);
//   })();
  
// anonymous function:
// const greet = function () {
//     console.log("Hello, World!");
//   };
//   greet(); // Hello, World!

  
  // function parameter:
//   function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
//   }
  
  
//   greet();         // Output: Hello, Guest!
//   greet("Naresh"); // Output: Hello, Naresh!
  

  