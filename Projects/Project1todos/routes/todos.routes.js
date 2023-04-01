const express = require("express")
const utils = require("../utils/utils")
const fs = require('fs/promises')

const todoRouter = express.Router()

todoRouter.get("/", (req, res) => {
    return utils.readData()
        .then((data) => {
            return res.status(200).json({
                message: "All todos fetched,",
                data: data,
                error: null
            })
        })
})

todoRouter.get("/:title", (req, res) => {
    const title = req.params.title.toLocaleLowerCase()

    return utils.readData()
        .then((dataArr) => {
            const todoObj = dataArr.find((todo) => {
                return todo.title.toLocaleLowerCase() === title
            })

            return res.status(200)
                .json({
                    message: "Todo fetched successfully.",
                    data: todoObj,
                    error: null
                })
        })
})

todoRouter.post("/", (req, res) => {

    const newTodo = req.body
    utils.readData()
        .then((data) => {
            data.push(newTodo)

            return fs.writeFile('db.json', JSON.stringify(data))
        })
        .then(() => {
            return res.status(201)
                .json({
                    message: "Todo created successfully",
                    data: newTodo,
                    error: null
                })
        })
})

todoRouter.put("/:title", (req, res) => {
    const title = req.params.title.toLocaleLowerCase()
    const newTodo = req.body

    return utils.readData()
        .then((dataArr) => {
            const idx = dataArr.findIndex((todo) => {
                return todo.title.toLocaleLowerCase() === title
            })
            if (idx != -1) {
                dataArr[idx] = {
                    ...dataArr[idx],
                    ...newTodo
                }
            }

            return fs.writeFile("db.json", JSON.stringify(dataArr))

        })
        .then(() => {
            return res.status(200)
                .json({
                    message: "Todo updated successfully",
                    data: newTodo,
                    error: null
                })
        })
})

todoRouter.delete("/:title", (req, res) => {
    const title = req.params.title.toLocaleLowerCase()
    let deleteObj;

    return utils.readData()
        .then((dataArr) => {
            const idx = dataArr.findIndex((todo) => {
                return todo.title.toLocaleLowerCase() === title
            })
            if (idx != -1) {
                deleteObj = dataArr.splice(idx, 1)
            }

            return fs.writeFile("db.json", JSON.stringify(dataArr))

        })
        .then(() => {
            return res.status(200)
                .json({
                    message: "Todo updated successfully",
                    data: deleteObj,
                    error: null
                })
        })
})

//Delete multiple
//multiple titles in array



module.exports = todoRouter