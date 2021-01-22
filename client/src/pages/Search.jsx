import { useState } from 'react'

import Jumbotron from '../components/Jumbotron'
import SearchForm from '../components/SearchForm'
import SearchResultCard from '../components/SearchResultCard'

function Search() {
  const [searchResults, setSearchResults] = useState([])

  const handleResults = (results) => {
    setSearchResults(results)
  }

  return (
    <div className="container">
      <Jumbotron
        title="(React)Google Book Search"
        text="Search for and Save Books of Interest"
      />
      <div className="row">
        <SearchForm resultHandler={handleResults} />

        <div className="col-md-12">
          {searchResults.length &&
            searchResults.map((result) => <SearchResultCard result={result} />)}
        </div>
      </div>
    </div>
  )
}

export default Search
