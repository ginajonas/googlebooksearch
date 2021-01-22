const router = require('express').Router()
const axios = require('axios')

router.get('/api/google', (req, res) => {
  axios
    .get('https://www.googleapis.com/books/v1/volumes?q=' + req.query.query)
    .then((response) => res.json(response.data.items))
})

module.exports = router
