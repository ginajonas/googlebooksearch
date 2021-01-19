import Jumbotron from '../components/Jumbotron'
import SearchForm from '../components/SearchForm'
import SearchResultCard from '../components/SearchResultCard'

function Search() {
  return (
    <div className="container">
      <Jumbotron
        title="(React)Google Book Search"
        text="Search for and Save Books of Interest"
      />
      <div className="row">
        <SearchForm />

        <div className="col-md-12">
          <SearchResultCard
            title="harry potter"
            viewLink="https://google.ca"
            imgLink="https://cdn4.buysellads.net/uu/1/69037/1596112950-A_ContentfulGraphQL_CarbonAds_260x200.png"
            description="SOME TEXT"
          />
        </div>
      </div>
    </div>
  )
}

export default Search
