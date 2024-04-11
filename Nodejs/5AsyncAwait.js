const x = 5;
const y = 10;

async function add(x, y) {
    return x + y;
}
async function sub(x, y) {
    return x - y;
}
async function mul(x, y) {
    return x * y;
}
async function div(x, y) {
    if (y < 0)
        return (new Error("Division by zero"), null);
    else
        return x / y;
}

async function Result(){
try{
const result1 = await add(x, y);
console.log(result1);
const result2 = await sub(x, y);
console.log(result2);
const result3 = await mul(x, y);
console.log(result3);
const result4 = await div(x, y);
console.log(result4);

const sum1=await add(result1, result2);
const sum2=await add(sum1,result3);
const total=await add(sum2,result4);
console.log(total);
}
catch(err){
    console.log(err.message);
}
}
Result()