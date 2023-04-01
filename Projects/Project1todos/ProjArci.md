# To-Do list
    Create a to-do list as a project

# Architecture (MVC Architecture)

    1. Model :- database and connection
    2. View :- Frontend
    3. Controller :- I/O and update

# Project 
## Folders
    1. Controllwe
    2. Router
    3. VIEW
    4. Middleware
    5. Utils/Helpers
## Files
    1. server.js
    2. config.js

### Initalize system
    1. initalize npm
    2. Create folders and files
    3. install required libraries (express, nodemon(dev))
    4. setup server

### server setup
    1. import express
        const express = require('express')

    2. initalize app 
        const app = express()

    3. start app
        app.listen(3000, ()=>{
            console.log("server is running on port 3000")
        })

    4. Create routes