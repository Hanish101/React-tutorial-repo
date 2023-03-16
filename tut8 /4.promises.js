const fs = require("fs/promises")

fs.readFile("./dummy.txt")
.then(function(data){
    console.log("Data : ", data)
})
.then(function(result){
    console.log("Result : ", result.toString())
})
.catch(function(error){
    console.log("Error: ", error)
})