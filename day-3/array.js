// Array properties and methods:
// create array:
// const numbers = [1, 2, 3, 4, 5];
// const numbers = new Array(1, 2, 3, 4, 5);
// const numbers = new Array(5);  // Array with 5 empty slots

// Array Properties:
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length); // 3
console.log(fruits.constructor); // ƒ Array() { [native code] }
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({}));     // false


// Array Methods:
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'cherry', 'orange']
console.log(fruits); // ['apple', 'banana', 'cherry']
console.log(fruits); // ['banana', 'cherry']
console.log(fruits); // ['kiwi', 'banana', 'cherry']

const moreFruits = ['orange', 'grape'];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['kiwi', 'banana', 'cherry', 'orange', 'grape']

const newFruits = fruits.slice(1, 3);
console.log(newFruits); // ['banana', 'cherry']

fruits.splice(1, 1, 'mango');
console.log(fruits); // ['kiwi', 'mango', 'cherry']


fruits.forEach(fruit => console.log(fruit)); // kiwi, mango, cherry


const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ['KIWI', 'MANGO', 'CHERRY']

const longNamedFruits = fruits.filter(fruit => fruit.length > 4);
console.log(longNamedFruits); // ['mango', 'cherry']


const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength); // 15 (kiwi + mango + cherry)


const found = fruits.find(fruit => fruit === 'mango');
console.log(found); // 'mango'

const sortedFruits = fruits.sort();
console.log(sortedFruits); // ['kiwi', 'mango', 'cherry']


const reversedFruits = fruits.reverse();
console.log(reversedFruits); // ['cherry', 'mango', 'kiwi']


const hasMango = fruits.some(fruit => fruit === 'mango');
console.log(hasMango); // true


const allShortNames = fruits.every(fruit => fruit.length < 6);
console.log(allShortNames); // true
