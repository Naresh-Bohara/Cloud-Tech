
// function firstPrint(){

//        console.log("This is first");

// }
// function secondPrint(){

//        console.log("This is second");

// }
// function thirdtPrint(){

//        console.log("This is third");

// }
// firstPrint()
// secondPrint()
// thirdtPrint()

// setTimeout(firstPrint, 3000)
// setTimeout(secondPrint, 1000)
// setTimeout(thirdtPrint, 2000)

// const firstPrint = ()=>{
//     console.log("This is first");
// }
 
// const secondPrint = ()=>{
//     console.log("This is second");
// }
// const thirdtPrint = ()=>{
//     console.log("This is third");
// }

const func1 = (cb) =>{
    return cb;
}

const func2 = (x)=>{
    console.log("I am fron func2. The value of x is: ", x)
}

func1(func2)