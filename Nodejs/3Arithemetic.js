const x = 5
const y =10
function add(x, y, callback) {
    callback(null, x + y);
}

function sub(x, y, callback) {
    callback(null, x - y);
}
function mul(x, y, callback) {
    callback(null, x * y);
}
function div(x, y, callback) {
    if(y < 0) 
    callback(new Error("Division by zero"), null);
    else
    callback(null, x / y);

}


add(x, y, (err, result1) => {
    if (err)
        console.error(err.message)
    sub(x, y, (err, result2) => {
        if (err)
            console.error(err.message)
        mul(x, y, (err, result3) => {
            if (err)
                console.error(err.message)
            div(x, y, (err, result4) => {
                if (err)
                    console.error(err.message)
                add(result1, result2, (err, sum1) => {
                    if (err) 
                    console.error(err.message)
                    add(sum1, result3, (err, sum2) => {
                        if (err) 
                        console.error(err.message)
                        add(sum2, result4, (err, finalResult) => {
                            if (err) 
                            console.error(err.message)
                            console.log(result1);
                            console.log(result2);
                            console.log(result3);
                            console.log(result4);
                            console.log(finalResult);
                        })
                    })

                    //     if (err)
                    //
                })
            })
        })
    })
});




