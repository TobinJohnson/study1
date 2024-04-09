//Sum Funtion
function sum(args) {
    //check for CLI arguments
        if (args.length < 3) {
        console.log("No numbers provided");
        return
    }
    //check for min 2 CLI arguments
    if (args.length < 4) {
        console.log(`Only one number is provided(Min 2 is requires)`);
    }
    var sum = 0;
    //Iterate through the arguments
    for (var i = 2; i < args.length; i++) {
        var number = parseFloat(args[i]);
        if (number == NaN) {
            console.log(`Invalid data recieved: ${args[i]}`);
            return
        }
        sum += number;
    }
    return `Sum: ${sum}`;

}
//Printing the sum of CLI arguments
console.log(sum(process.argv))