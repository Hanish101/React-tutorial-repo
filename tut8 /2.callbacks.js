const fs = require('fs')

// console.log(fs)
//Async

fs.readFile("./dummy.txt", function(error, data){
    console.log("Error:", error)
    console.log("Data :", data.toString())
})

console.log("Second function\n")

//Sync

const data = fs.readFileSync("./dummy.txt")

console.log(" sync data : ", data.toString())

console.log("\n")