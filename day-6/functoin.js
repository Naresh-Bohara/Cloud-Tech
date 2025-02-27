const openFridge = (...foods)=>{
 console.log(foods)
}

openFridge("food1", "food2")


const firstPrint = ()=>{
    console.log("first Print");
}
const secondPrint = ()=>{
    console.log("second Print");
}
const thirdPrint = ()=>{
    console.log("third Print");
}

setTimeout(firstPrint, 3000);
setTimeout(secondPrint, 1000)
setTimeout(thirdPrint, 2000)



// call back function:
const func1 = (cb)=>{
    return cb(1);
}

const func2 = (x)=>{
    console.log("I am function 2, and the value of x is: ", x)
}

func1(func2);