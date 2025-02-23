// String Properties and Methods:
/* Strings are a sequence of characters. JavaScript provides several properties and methods to work with strings. */

// a. String Properties
// - length: Returns the length of a string.

// b. String Methods:
// - charAt(index): Returns the character at the specified index.
// - concat(str1, str2, ...): Combines two or more strings.
// - includes(substring): Checks if a string contains a substring.
// - indexOf(substring): Returns the index of the first occurrence of a substring.
// - slice(start, end): Extracts a portion of a string.
// - split(separator): Splits a string into an array based on a separator.
// - toLowerCase(): Converts a string to lowercase.
// - toUpperCase(): Converts a string to uppercase.
// - trim(): Removes whitespace from both ends of a string.
// - replace(old, new): Replaces a substring with another substring.

// Example: 
let str = "Hello";
// console.log(str.length); // Output: 5
// console.log(str.charAt(2)); // Output: l
// console.log(str.concat(" World")); // Output: Hello World
// console.log(str.includes("ell")); // Output: true
// console.log(str.indexOf("l")); // Output: 2
// console.log(str.slice(1, 4)); // Output: ell
// console.log(str.split("")); // Output: ["H", "e", "l", "l", "o"]
// console.log(str.toLowerCase()); // Output: hello
// console.log(str.toUpperCase()); // Output: HELLO
// let str2 = "  Hello  ";
// console.log(str2.trim()); // Output: Hello
// console.log(str.replace("Hello", "Hii")); // Output: Hii 
// console.log(str.substring(1, 4));  // Output: ell
// console.log(str.substr(1, 4)); // Output: ello 
// console.log(str.charCodeAt(1));   // Output: 101 (Unicode value for 'e') 
// console.log(str.startsWith("He")); // Output: true 
// console.log(str.endsWith("lo")); // Output: true 
// console.log(str.repeat(2)); // Output: HelloHello 
// console.log(str.search("e")); // Output: 1 (index of first match) 
// console.log(str.match(/[aeiou]/g)); // Output: ['e', 'o'] 
const filePath = "images/2025/image.jpg";
console.log(filePath.lastIndexOf("/"));  // Output: 16
