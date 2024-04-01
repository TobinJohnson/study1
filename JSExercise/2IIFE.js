(function iife(){
    console.log("Loading User Details...");
})();

const wishes=(firstname,lastname)=>{
    const message =`Name:GREETING_MSG ${firstname} ${lastname}`;
    const greeting=()=>{
        console.log(message);
    }
    return greeting

}
const greetingWishes=wishes('Tobin','Johnson')
greetingWishes()