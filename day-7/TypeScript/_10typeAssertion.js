"use strict";
// Type Assertion 
// Type Casting 
// Non-null assertion operator
/**
 * . Type Assertion
Definition: Tells TypeScript what type a variable should be treated as.

Syntax:
value as Type (common)
<Type>value (JSX incompatible)
Use case: Helpful when you know more about a value’s type than TypeScript does.
 */
let a = 12.434;
console.log(a.toFixed(2)); // "12.43"
let b = Number("12");
console.log(b);
