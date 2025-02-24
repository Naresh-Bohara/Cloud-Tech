const products = [
    {
        id: 1, 
        name: "Product Name One",
        brand: "apple",
        price: 1000,
        discount: 10    // in percentage
    },
    {
        id: 2, 
        brand: "samsung",
        name: "product Name two",
        price: 1000,
        discount: 7
    },
    {
        id: 3, 
        brand: "hp",
        name: "product Name three",
        price: 1000,
        discount: 5
    },
    {
        id: 4, 
        brand: "apple",
        name: "product Name four",
        price: 1000,
        discount: 9
    }
]

console.log(products);
// for(let product of products) {
//     product['discountAmount'] = product.price * product.discount/100;
//     product['afterDis'] = product.price - product['discountAmount'];
// }


products.map((product, i) => {
    product['discountAmount'] = product.price * product.discount/100;
    product['afterDis'] = product.price - product['discountAmount'];
    // return undefined
    // return product;
});


products.forEach((product, i) => {
    product['discountAmount'] = product.price * product.discount/100;
    product['afterDis'] = product.price - product['discountAmount'];
    // return undefined
    // return product;
});




// console.log(result)
// 

// 1-10
console.log([...Array(10)]);

[...Array(10)].map((_, i) => {
    console.log(i+1)
})


// products.forEach();


// console.log(products);


// create an array of products with brand as apple 

// array function 

const prodList = products.filter((prod, i) =>prod.brand === 'apple')

// products.map((prod) => {
//     if(prod.brand === 'apple') {
//         prodList.push(prod)
//     }
// })

console.log(prodList)


let numb1 = [1,2,3,4,5,6,7,8,9,10]

// sum 
// let sum = 0;
// numb1.map((num) => {
//     sum += num
// })

let sum = numb1.reduce((sum, num) => {
    sum += num
    return sum;
})
console.log(sum)