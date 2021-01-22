import { useState } from 'react'
import axios from 'axios'
function SearchForm({ resultHandler }) {
  const [searchValue, setSearchValue] = useState('')

  const searchGoogle = () => {
    axios('/api/google', { params: { query: searchValue } }).then(
      (response) => {
        resultHandler(response.data)
      }
    )
  }

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Search Books</h5>
          <div className="input-group mb-3">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                onClick={searchGoogle}
                className="btn btn-outline-secondary"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SearchForm
