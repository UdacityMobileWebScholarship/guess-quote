const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const userRoutes = require('./api/routes/user')

// TODO: connect to database

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// routes
app.use('/user', userRoutes)

// error handling
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  console.log(err)
  res.json({
    error: {
      message: err.message
    }
  })
})

module.exports = app
