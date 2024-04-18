const x = 0
const y = 1

const add = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return Promise.reject(new Error("Value is not a number"))
    }
    return Promise.resolve(x + y);
}
const sub = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return Promise.reject(new Error("Value is not a number"))
    }
    return Promise.resolve(x - y);
}
const mul = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return Promise.reject(new Error("Value is not a number"))
    }

    return new Promise((resolve, reject) => {
        resolve(x * y);
    })
}
const div = (x, y) => {
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
                        }).catch(error => { console.error(error.message); });
                    })
                })
            }).catch(error => { console.error(error.message); });
        }).catch(error => { console.error(error.message); });
    }).catch(error => { console.error(error.message); });

}).catch(error => { console.error(error.message); });