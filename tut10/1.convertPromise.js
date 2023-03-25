const fs = require("fs")

const readFilePromise = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

readFilePromise("./dummy.txt")
    .then(data => {
        console.log(data.toString())
    })
    .catch(err => {
        console.log(err)
    })


// 
const str1 = "ABCDE"
const arr1 = ['a','b','c','d', 'e']


