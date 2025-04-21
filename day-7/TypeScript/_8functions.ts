// functions
// function types 
// Optional and default parameter 
// Rest parameter 
// Overloads 

// function abcd():string {
//     return "hey"
// }

// function xyz(name:string, cb:(arg:string)=>void){
//     cb("hey")
// }

// xyz("naresh", (arg:string)=>{
//     console.log(arg)
// })


// function abc(name:string, age:number, gender?:string){

// }
// abc("rohan", 23, "male")
// abc("rohan", 23)


// function abc(name:string, age:number, gender:string = "male"){
//     console.log(name, age, gender)
// }
// abc("sita", 23, "female")
// abc("rohan", 23)


//rest parameters

// function numbers(...args:number[]){
//     console.log(args)
// }

// numbers(1,2,3,4,5,5,6,6,7)


/**
 * Spread (...)
Used to expand elements from arrays or objects.
 */

// const arr1 = [1, 2];
// const arr2 = [...arr1, 3]; // [1, 2, 3]

// const obj1 = { a: 1 };
// const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }


// function overloads:
/*
Function overloading allows you to define multiple function signatures for a single function, giving flexibility in how it can be called.
*/

// Function signatures (overloads)
// function abcd(a: number): void;
// function abcd(a: string, b: number): number;

// // Function implementation
// function abcd(a: any, b?: any) {
//   if (typeof a === "number" && typeof b === "undefined") {
//     console.log("hey");
//   }
//   if (typeof a === "string" && typeof b === "number") {
//     return 123;
//   } else {
//     throw new Error("something went wrong");
//   }
// }
