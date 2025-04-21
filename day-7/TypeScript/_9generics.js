"use strict";
// Generics
// Generic functions
// Generic interfaces 
// Generic classes
/**
 * Generics allow you to create reusable and flexible functions, classes, or interfaces that work with different data types without losing type safety.
 */
// function abcd<T> (a:T){
// }
// abcd<string>("naresh")
// abcd<number>(23)
// function abcd <H>(a:H, b:H, c:number){
// }
// abcd<string>("naresh", "Dhangadhi", 13)
// function log<T>(value:T){
//     console.log(value)
// }
// log<string>("hey")
// log<number>(122222)
// log(12)
// log("hii there")
// Generic interface that works with any type T
// interface ApiResponse<T> {
//     status: number;
//     success: boolean;
//     data: T;
//   }
//   // Using ApiResponse with a User type
//   interface User {
//     id: number;
//     name: string;
//   }
//   const userResponse: ApiResponse<User> = {
//     status: 200,
//     success: true,
//     data: {
//       id: 1,
//       name: "Naresh",
//     },
//   };
//   // Using ApiResponse with a string
//   const messageResponse: ApiResponse<string> = {
//     status: 200,
//     success: true,
//     data: "Operation successful!",
//   };
class BottleMaker {
    constructor(key) {
        this.key = key;
    }
}
let b1 = new BottleMaker("milton");
console.log(b1);
let b2 = new BottleMaker(123);
console.log(b2);
