import axios from 'axios'

function SavedBookCard({ book }) {
  const { _id, title, previewLink, imageLink, description } = book

  const deleteBook = () => {
    axios.delete('/api/books/' + _id).then((response) => {
      window.location.reload()
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
            onClick={deleteBook}
            type="button"
            className="btn btn-secondary"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <img alt="book" src={imageLink || '#'} />
        </div>
        <div className="col-md-9">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default SavedBookCard
