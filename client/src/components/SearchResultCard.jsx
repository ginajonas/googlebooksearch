function SearchResultCard({ title, viewLink, imgLink, description }) {
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-10">
          <h3>{title}</h3>
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-primary">
            View
          </button>
          <button type="button" className="btn btn-secondary">
            Save
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <img alt="book" src={imgLink} />
        </div>
        <div className="col-md-9">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default SearchResultCard
