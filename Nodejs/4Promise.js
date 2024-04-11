const x = 5
const y = 10

const add = (x, y) => {
    return new Promise((resolve, reject) => {
        resolve(x + y);
    })
}
const sub = (x, y) => {
    return new Promise((resolve, reject) => {
        resolve(x - y);
    })
}
const mul = (x, y) => {
    return new Promise((resolve, reject) => {
        resolve(x * y);
    })
}
const div = (x, y) => {
    return new Promise((resolove, reject) => {
        if (y < 0) {
            reject(new Error("Division by zero"))
        }
        resolove(x / y);
    })
}

add(x, y).then(result1 => {
    console.log(result1)
    return sub(x, y).then(result2 => {
        console.log(result2)
        return mul(x, y).then(result3 => {
            console.log(result3)
            return div(x, y).then(result4 => {
                console.log(result4)
                return add(result1, result2).then(sum1 => {
                    return add(sum1, result3).then(sum2 => {
                        return add(sum2, result4).then(finalResult => {
                            console.log(finalResult)
                        }).catch(err=>console.log(err))
                    })
                })
            })
        })
    })

})