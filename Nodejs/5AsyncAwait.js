const x = 5;
const y = 10;

const add=async(x,y)=>{
    if(isNaN(x)|| isNaN(y)){
        return Promise.reject(new Error("Value is not a number"))
    }
    return Promise.resolve(x + y);
}
const sub=async(x,y)=>{
    if(isNaN(x)|| isNaN(y)){
        return Promise.reject(new Error("Value is not a number"))
    }
    return Promise.resolve(x - y);
}
const mul=async(x,y)=>{
    if(isNaN(x)|| isNaN(y)){
        return Promise.reject(new Error("Value is not a number"))
    }

    return new Promise((resolve, reject) => {
        resolve(x * y);
    })
}
const div=async(x,y)=>{
    return new Promise((resolve, reject) => {
        if (y === 0) {
            reject(new Error("Division by zero"))
        }
        if (isNaN(x) || isNaN(y)) {
            reject(new Error("Value is not a number"))
        }
        resolve(x / y);
    })
}
 const calculate=async()=>{
    try{
        const result1=await add(x,y)
        console.log("Sum of numbers "+ result1);

        const result2=await sub(x,y)
        console.log("Subtraction of numbers "+ result2);

        const result3=await mul(x,y)
        console.log("Multiplication of numbers "+result3);

        const result4=await div(x,y)
        console.log("Divison of numbers "+result4);

        const sum1=await add(result1, result2);
        const sum2=await add(sum1,result3);
        const total=await add(sum2,result4);
        console.log("Final total "+total);


    }
    catch{
        console.error(error.message)

    }
 }
 calculate()

