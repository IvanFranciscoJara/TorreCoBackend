const express = require('express')
// const jwt = require('jsonwebtoken')
const fs = require('fs')
const app = express()
const cors = require('cors')
const RouteSearch = require('./routes/Search')

app.use(cors())
app.get('/', (req, res) => {
  res.send('Backend Javascript Educorp')
})

app.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'refreshtoken')
  next()
})

app.use(express.json())
app.get('/', (req, res) => res.send('Backend Torre.co'))
app.use('/Torre', RouteSearch)

app.use((error, req, res, next) => {
  console.log(error.message.toString())
  return res.status(500).json({ errorMessage: error.message.toString() })
})

module.exports = app
