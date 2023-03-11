const fs = require('fs')

fs.readFile("./dummy.txt", function(error, data){
    console.log("Error:", error)
    console.log("Data :", data.toString())

    const firstData = data
    // console.log(firstData)

    fs.readFile("./anotherOne.txt", function(error, data){
        console.log("Error:", error)
        console.log("Data :", data.toString())
        console.log("Data :", firstData+data)

        secondData = data

        fs.readFile("./anotherTwo.txt", function(error, data){
            console.log("Error:", error)
            console.log("Data :", data.toString())

    
            console.log("Data :", firstData + secondData + data)
        })
    })
})

const data1 = fs.readFileSync("./dummy.txt")
const data2 = fs.readFileSync("./anotherOne.txt")
const data3 = fs.readFileSync("./anotherTwo.txt")

console.log("***********sync read**********\n", data1 + data2 + data3)