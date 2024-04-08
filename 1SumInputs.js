const readline=require('readline')

const r=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r.question('Enter first number: ',(first)=>{
    r.question('Enter second number: ',(second)=>{
    const result=parseInt(first)+parseInt(second);
    console.log(result)
    r.close()})})

    