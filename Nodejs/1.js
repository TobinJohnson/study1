const readline = require("readline")
const r=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r.question('Enter the first number' ,(first)=>{
    r.question('Enter the swcond number ',(second)=>{
        const sum = parseInt(first)+parseInt(second)
        console.log(sum);
        r.close()
    })
})