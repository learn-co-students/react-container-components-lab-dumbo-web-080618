import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleFormSubmit = event => {
    event.preventDefault()
    let searchURL = URL + this.state.searchTerm
    fetch(searchURL)
      .then(r => r.json())
      .then(data => this.setState({ reviews: data.results }));
  }

  handleInputChange = (event) => {
    let searchTerm = event.target.value
    this.setState({searchTerm})
  }

  displayMovies = () => {
    if (this.state.reviews.length > 0) {
      return (<div><h1>Movies Matching Search:</h1>
      <MovieReviews reviews={ this.state.reviews } /></div>)
    } else {
      return <p>No moviews matching your search</p>
    }
  }

  render() {
    return (
      <div className="searchable-movie-reviews" >
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="Search movie reviews"
            onChange={this.handleInputChange}/>
          <button type="submit" >Submit</button>
        </form>
        {this.state.reviews.length > 0 ? <div><h1>Movies Matching Search:</h1>
        <MovieReviews reviews={ this.state.reviews } /></div> : (this.state.searchTerm !== '' ? <p>No moviews matching your search)</p> : <p></p>)}
      </div>
    )
  }
}
