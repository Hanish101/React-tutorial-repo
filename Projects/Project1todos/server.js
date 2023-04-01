const express = require('express')
const todoRouter =  require("./routes/todos.routes")
//initalize app
const app = express()

//middleware
app.use(express.json())


//greetings
app.get('/greetings', (req, res)=> {
    return res.send("Greetings from Todo app")
})

//todos routing
app.use("/todoroute", todoRouter)

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})