const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/users')

const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))

app.use('/users', userRoutes)

module.exports = app
