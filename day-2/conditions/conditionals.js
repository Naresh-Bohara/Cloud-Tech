/**
 *     ********** Conditionals in js  ***************
Conditions are statements in programming that allow the execution of certain code depending on whether a specific condition is true or false. They are commonly used for decision-making and flow control.

// Types of Conditions in JavaScript
    - if: Executes a block of code if a specified condition is true.
    - else if: Executes a block of code if the previous condition was false and the current condition is true.
    - else: Executes a block of code if none of the preceding conditions are true.
    - switch: A control structure that executes one of many blocks of code based on the value of a  variable.
    - Ternary Operator: A shorthand for if-else.
 */

/*
a. if Statement: 
 if (condition) {
  // Code to execute if condition is true
}

b. else Statement:
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}

c. else if Statement:
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if all conditions are false
}

d. Ternary Operator
condition ? expressionIfTrue : expressionIfFalse;

e. switch Statement:
switch (expression) {
case value1:
// code to execute when value of expression === value1
break;
case value2:
// code to execute when value of expression === value2
break;
default:
// code to execute when expression not equal any of the cases
}

*/


// if / else if / else:
    /* Use these for complex conditional logic, such as user roles, authentication, or response handling in APIs.   
    Example: Checking user permissions:*/ 

let userRole = "admin";
if (userRole === "admin") {
    console.log("Full access granted");
} else if (userRole === "editor") {
    console.log("Limited access");
} else {
    console.log("No access");
}

// switch:
/*
Ideal for situations where you need to check multiple possible values of a variable (e.g., status codes, product categories, or user actions).
Example: Handling different HTTP response codes:
*/
let statusCode = 404;

switch (statusCode) {
    case 200:
        console.log("Success");
        break;
    case 404:
        console.log("Page Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    default:
        console.log("Unknown error");
}

// Ternary operator:
/* simple example using the ternary operator to check if a user is online or offline: */
const isOnline = true;  

const userStatus = isOnline ? 'User is Online' : 'User is Offline';
console.log(userStatus);

// nullish coalescing operator (??): to handle null or undefined values.
const userName = null; // This could be dynamic
const displayName = userName ?? 'Guest';  // If userName is null or undefined, 'Guest' will be used
console.log(displayName);


