const readline = require("readline")
const r=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function firstNumber(){


r.question("Enter the first number",(first)=>{
    var num1;
    try{
        num1=parseInt(first)
        if(isNaN(num1))
        throw new Error("Not a number")
        secondNumber(num1)
        }
    catch(error){
       console.log("Enter a valid number")
       firstNumber()      
    }
})}
function secondNumber(num1) {
r.question("Enter the second number ",(second)=>{
    var num2;
    try{
    num2=parseInt(second)
    if(isNaN(num2))
    throw new Error("Not a number")
    let sum=num1+num2
    console.log("Sum of the two numbers is " + sum)
    r.close()
}
    catch(error){
        console.log("Enter a valid number")
        secondNumber(num1)
    }}
)}
firstNumber()