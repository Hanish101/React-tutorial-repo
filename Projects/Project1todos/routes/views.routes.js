const express = require("express")
const utils = require("../utils/utils")

const viewsRouter = express.Router()

viewsRouter.get("/", (req, res) => {
    return utils.readData()
    .then((dataArr)=>{
        res.render("index",{title: "Home", todos: dataArr})
    })
})

viewsRouter.get("/todos/:title", (req, res)=> {
    const title = req.params.title.toLowerCase()

    return utils.readData()
    .then((dataArr) => {
        const todo = dataArr.find((element) => (element.title.toLowerCase() === title))

        return res.render("todo", {title: "updated", todo})
    })
})

module.exports = viewsRouter