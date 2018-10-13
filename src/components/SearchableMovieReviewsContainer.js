import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
let URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  componentDidMount(){
    let url = URL
    this.state.searchTerm === ''? '' : url += `&query=${this.state.searchTerm}`
    fetch(url)
      .then(res => res.json())
      .then(reviews => this.setState({reviews:reviews["results"]}))
  }

  // componentDidUpdate(){
  //   fetch(URL + `&query=${this.state.searchTerm}`)
  //     .then(res => res.json())
  //     .then(reviews => this.setState({reviews:reviews["results"]}))
  // }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    // this.setState({searchTerm: e.target.searchTerm.value})
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
        <input type="submit" value="submit"/>
      </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
