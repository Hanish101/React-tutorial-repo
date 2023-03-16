// console.log("First")
// console.log("Second")
// console.log("Third")


//Async behaviour
console.log("First")

setTimeout(function(){
    console.log("Second")
}, 2)

setTimeout(function(){
    console.log("Third")
}, 1)


console.log("Fourth")