const express = require('express')
const { CreateUser } = require('../Controllers/UserController')
const route= express.Router()


route.post('/create-user',CreateUser)




module.exports =route