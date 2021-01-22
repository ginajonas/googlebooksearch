const router = require('express').Router()
const Books = require('../models/books')

router.post('/api/books', (req, res) => {
  Books.create(req.body)
    .then((dbBooks) => {
      res.json(dbBooks)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})
router.get('/api/books', (req, res) => {
  Books.find({})
    .then((dbBooks) => {
      res.json(dbBooks)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

router.delete('/api/books/:id', (req, res) => {
  Books.findByIdAndDelete(req.params.id)
    .then((dbBooks) => {
      res.json(dbBooks)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

module.exports = router
