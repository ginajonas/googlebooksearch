const express = require('express')

const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3001

// Define middleware here for POST requests with JSON.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(require('./routes/googleApi.js'))
app.use(require('./routes/booksApi.js'))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks')

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
