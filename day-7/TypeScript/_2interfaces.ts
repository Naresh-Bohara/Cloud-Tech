/**
 * Interfaces and Type Aliases
 * Defining interfaces
 * Using interfaces to define object shapes
 * Extending interfaces
 * Type Aliases
 * Intersection types
 */

// interface types 

// interface User {
//     name: string,
//     email: string,
//     password:string,
//     age:number,
//     gender?:string
// }

// function getDataOfUser (obj:User){
// obj.email = ""
// }

// getDataOfUser({name:"narresh", email:"naresh@gmail.com", password:"", age:12})

// interface Admin extends User {
//     admin:boolean
// }

// function getAdmin(obj:Admin):void{
//     obj.admin = false;
//     obj.name = "harish"
// }


// Type Aliases:
// Type aliases in TypeScript are used to give a custom name to a type. This makes complex types easier to reuse and read.

// type value = string | number | null
// let a: value = null;

// function show(a:value):void{
// }

// show("hey")

// type UserID = string;
// type User = {
//   id: UserID;
//   name: string;
// };


// intersection types:
// type User = {
//     name: string, 
//     email: string
// }

// type Admin = User & {
//     getDetails(user:String):void
// }

// function abcd (a:Admin){
//     a.getDetails("xyz")
// }

/**
 * type - for data types define, dulicating same shows error , for eg type a = string, type a = number ------shows error 
 * 
 * interface - for obj shape defining, duplication merge in one here
 */