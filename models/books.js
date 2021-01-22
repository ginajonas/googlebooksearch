const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  previewLink: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const Books = mongoose.model('Books', bookSchema)

module.exports = Books
