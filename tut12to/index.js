const express = require("express")
const fs = require("fs/promises")

const app = express()

//Function
function readAllData(){
    return fs.readFile('data.json', 'utf-8')
    .then(data => {
        return JSON.parse(data.toString())
    })
}


app.use(express.json())


app.get("/users",(req, res) => {
    return readAllData()
    .then( data => {
        return res.send(data)
    })
})

app.post("/users",(req, res) => {
    const newUser = req.body
    console.log("__new__user", newUser)
    
    return readAllData()
    .then(data =>{
        data.push(newUser)
        console.log()
        return fs.writeFile('data.json', JSON.stringify(data))
    })
    .then(function() {
        res.send("user created successfully")
    })
    .catch(function(error){
        res.send("user not creates")
    })

    
})

app.listen(3000, function(){
    console.log("server is running on port 3000")
})