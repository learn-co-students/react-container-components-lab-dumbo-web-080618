import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  fetchReviews = () => {
    fetch(URL)
      .then(res => res.json())
      .then(reviews => this.filterReviews(reviews.results))
  }


  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`)
  //     .then(res => res.json())
  //     .then(reviews => {
  //       let newReviews = reviews.results.filter(review => review.headline.includes(this.state.searchTerm))
  //
  //       this.setState({
  //         reviews: newReviews
  //       })
  //     })
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(reviews => this.setState({
        reviews: reviews.results
      }))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            id="search-input"
            type="text"
            style={{ width: 300 }}
            onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
