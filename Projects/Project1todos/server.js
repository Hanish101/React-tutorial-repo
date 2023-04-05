const express = require('express')
// routes
const todoRouter =  require("./routes/todos.routes")
const viewsRouter =  require("./routes/views.routes")

//initalize app
const app = express()

//middleware
app.use(express.json())

//set view engine
app.set("view engine", "ejs")


//greetings
app.get('/greetings', (req, res)=> {
    return res.send("Greetings from Todo app")
})

//Views routing
app.use("/", viewsRouter)

//api routing
app.use("/api/v1/todos", todoRouter)

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})