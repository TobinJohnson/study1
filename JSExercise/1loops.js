//Array of values
let array=['apple','banana','mango']
for(arr of array){
    console.log(arr)
}

// Array of objects
let array2=[{"fruit":"apple"},{"fruit":"banana"},{"fruit":"mango"}]
for(let i=0; i<array2.length; i++){
console.log(array2[i].fruit)
}
//Using ForEach method
let array3=[{"fruit":"apple"},{"fruit":"banana"},{"fruit":"mango"}]
array3.forEach((value)=>{
console.log(value.fruit)
})


//Objects
let object1 = { fruit1:'apple',fruit2:'banana',fruit3:'mango'}
for( ar in object1){
    console.log(object1[ar])
}
   