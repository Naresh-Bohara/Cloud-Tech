/**
 * a. String / Text 
 *      "", '', ``
 * b. Number 
 *      a. Integer 
 *      b. Floating points / Decimal
 *      c. Big integer
 * c. Null
 *      empty
 * d. Boolean
 *      true, false
 * e. Array 
 *  - A collection of data 
 *  - any data 
 *  - separated by comma 
 *  - stored in index value pair where index are auto assigned and starts from 0
 *  - in two ways 
 *      [], 
 *      new Array()
 * f. Object / JSON
 *  - A collection of any data ,
 *  - separated by comma 
 *  - key value paired
 *  - {key: value, ....}
 * g. function 
 * h. undefined
 */

let name = "Naresh"
let fullName = 'Naresh'
let full_name = `Naresh Bohara`

let x = 123;
let y = 12.3;
let z = 1e3;        // big int

let a = null    // null 
let b = '';     // empty value, string 

// flag 
let c = true; 
let d = false; 

// array 
        //  0           1               2                           3       
let arr = ["Naresh", "Dhangadhi", "nareshbohar112@gmail.com", 9876543210]

console.log(arr[0])

console.log(arr[3])

let arr1 = new Array("Naresh", "Dhangadhi", "nareshbohar112@gmail.com", 9876543210);

console.log(arr1[0])
console.log(arr1[3])


// two types 
//  a. Single dimensional 
    // all the elements are if non-array type or non-object type

//  b. Multi Dimensional 
    // atleast one of the element of that array is an array or an object

// single dimensional array
const product1 = ["iPhone 15", "apple", 178000, "smart-phone"];

const allProducts = [
    ["iPhone 15", "apple", 178000, ["smart-phone", "apple phone"]],
    ["iPhone 14", "apple", 158000, "smart-phone"],
    ["S3 Ultra pro", "Samsung", 50000, "smart-phone"],
    ["iPhone 12", "apple", 120000, "smart-phone"]
]
console.log(allProducts)    // [
//     ["iPhone 15", "apple", 178000, ["smart-phone", "apple phone"]],
//     ["iPhone 14", "apple", 158000, "smart-phone"],
//     ["S3 Ultra pro", "Samsung", 50000, "smart-phone"],
//     ["iPhone 12", "apple", 120000, "smart-phone"]
// ]
console.log(allProducts[0]);        //     ["iPhone 15", "apple", 178000, ["smart-phone", "apple phone"]],
console.log(allProducts[0][3])      // ["smart-phone", "apple phone"]
console.log(allProducts[0][3][1])   //  "apple phone"


// Interpret
const car1 = ["i10", "Hyundai", 3600000, 4, 5];

const car2 = ["Nexon", "Tata", 5100000, 5, 7];


const car1_1 = {
    modelName: "i10",
    brand: "Hyundai",
    price: 3600000, 
    seatCapacity: 4, 
    discount: 5
}

let key = 'brand';

// (car1_1[key])

console.log(car1_1.modelName);
console.log(car1_1['brand']);

const user = {
    name: {
        first: "Naresh",
        last: "Bohara"
    },
    phone: [
        123123123123,
        98776543210
    ]
}


const getUser = function(){
    
}

getUser();


let g;  // undefined


console.log(typeof g)       /// undefined 
console.log(typeof name)        // string 


let username = "Naresh";

console.log();

username.toUpperCase()

// loosely coupled dynamically typed programming language

let abc;        // undefined 
abc = ""        // string
abc = 123       // number
abc = []
abc = {}

// ts 
// let abc: string;
//  abc = 123 as string;  // error 

// array, object 

// Operators and control statement
// $or, $and, mongodb 
// jquery $
// regex