import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = 'a40bd4c26c81442097ee42d440008f5c';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
const API = `api-key=${NYT_API_KEY}`;


export default class SearchableMovieReviewsContainer extends Component {

  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  changeFilter = (evt) => {
    evt.preventDefault()

    let newFilter = evt.target.search.value
    this.setState({
      searchTerm: newFilter
    }, () => this.updateMovies())

  }

  updateMovies = () => {
  fetch(URL + `query=${this.state.searchTerm}&` + API )
  .then(res => res.json())
  .then(res => {
    this.setState({
    reviews: res.results
  }
  , () => console.log(this.state)
      )
    })
  }


  renderSearch = () => {

    return this.state.reviews.map(review => <MovieReviews text={review} />)
  }

  render(){

    return (
      <div className="searchable-movie-reviews" >
        <form onSubmit={this.changeFilter}>
          <input name="search"/>
          <input type="submit" value="Submit" />
        </form>
          {this.state.searchTerm ? this.renderSearch() : ''}
    </div>
    )
  }
}



// Both container components should be class components that maintain state.
// The SearchableMovieReviewsContainer should have a top-level wrapping element with class searchable-movie-reviews.
 // <SearchableMovieReviewsContainer>, will provide a searchable interface allowing the user to enter a search term and then receive a list of reviews that match the search term(s).
