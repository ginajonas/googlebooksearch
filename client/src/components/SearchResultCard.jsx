import axios from 'axios'

function SearchResultCard({ result }) {
  const { title, previewLink, imageLinks, description } = result.volumeInfo

  const saveSearch = () => {
    axios.post('/api/books', {
      title: title,
      previewLink: previewLink,
      imageLink: imageLinks.thumbnail,
      description: description,
    })
  }

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-10">
          <h3>{title}</h3>
        </div>
        <div className="col-md-2">
          <a
            href={previewLink}
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            View
          </a>
          <button
            onClick={saveSearch}
            type="button"
            className="btn btn-secondary"
          >
            Save
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <img
            alt="book"
            src={imageLinks.thumbnail ? imageLinks.thumbnail : '#'}
          />
        </div>
        <div className="col-md-9">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default SearchResultCard
