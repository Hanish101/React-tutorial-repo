const fs = require('fs/promises')

function readData(){
    return fs.readFile("db.json", "utf8")
    .then((data) => {
        return JSON.parse(data.toString())
    })
}

module.exports = {
    readData
}