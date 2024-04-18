
const x = 1
const y =0
function add(x, y, callback) {
    if(isNaN(x)|| isNaN(y)){
        callback(new Error("Value is not a number"))    
    }
    else
    callback(null, x + y);
}

function sub(x, y, callback) { 
    if(isNaN(x)|| isNaN(y))
    callback(new Error("Not a number"))
    else
    callback(null, x - y);
}
function mul(x, y, callback) {
    if(isNaN(x)|| isNaN(y))
    callback(new Error("Not a number"))
    else
    callback(null, x * y);
}
function div(x, y, callback) {
    if(y === 0 || x=== 0) 
    callback(new Error("Division by zero"));
    else  if(isNaN(x)|| isNaN(y))
    callback(new Error("Not a number"))
    else
    callback(null, x / y);

}


add(x, y, (err, result1) => {
    if (err){
        console.error(err.message)
        return
    }
    sub(x, y, (err, result2) => {
        if (err)
            console.error(err.message)
        mul(x, y, (err, result3) => {
            if (err)
                console.error(err.message)
            div(x, y, (err, result4) => {
                if (err){
                    console.error(err.message)
                    return
                }
                add(result1, result2, (err, sum1) => {
                    if (err) 
                    console.error(err.message)
                    add(sum1, result3, (err, sum2) => {
                        if (err) 
                        console.error(err.message)
                        add(sum2, result4, (err, finalResult) => {
                            if (err) 
                            console.error(err.message)
                            console.log("Addition of two numbers = "+result1);
                            console.log("Subtraction of two numbers = "+result2);
                            console.log("Multiplication of two numbers = "+result3);
                            console.log("Division of two numbers = "+result4);
                            console.log("Sum of the all the above results = "+finalResult);
                        })
                    })

                    //     if (err)
                    //
                })
            })
        })
    })
});




