function stringCalculator(a){
    const input=a.replace(/plus/g,"+").
                  replace(/minus/g,"-").
                  replace(/multipliedby/g,"*").
                  replace(/dividedby/g,"/")
                  console.log(input)
    let final=eval(input)
    let result=Math.round(final)
    return result
}
// const input = "(3plus5minus2)dividedby(2multipliedby4)";
const input = "(3plus5minus2)dividedby(2multipliedby4)";

let value=stringCalculator(input)
console.log(value)