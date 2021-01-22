import { useEffect, useState } from 'react'
import axios from 'axios'

import Jumbotron from '../components/Jumbotron'
import SavedBookCard from '../components/SavedBookCard'

function SavedBooks() {
  const [savedBooks, setSavedBooks] = useState([])

  useEffect(() => {
    axios.get('/api/books').then((response) => {
      setSavedBooks(response.data)
    })
  })

  return (
    <div className="container">
      <Jumbotron title="(React) Google Book Search" text="Saved Books List" />
      <div className="row">
        <div className="col-md-12">
          {savedBooks.length &&
            savedBooks.map((result) => <SavedBookCard book={result} />)}
        </div>
      </div>
    </div>
  )
}

export default SavedBooks
