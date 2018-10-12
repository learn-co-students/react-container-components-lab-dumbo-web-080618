import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor(props){
    super(props)
    /* should fetch data from the New York Times API */
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    // *ASYNC: stuff
    fetch(URL)
      .then(json => {this.setState({reviews: json.results})})
  }

  /*/ shouldComponentUpdate(nextProps, nextState){
  //   return !(this.state === nextState)
  // }*/

  latestReviews = () => {
    let reviewsLength = this.state.reviews.length
    const latestReviews = this.state.reviews.filter((rvw, idx) => idx > reviewsLength - 4)
    return latestReviews
  }
  
  render(){
    
    return(
      <div className="latest-movie-reviews"><MovieReviews reviews={this.latestReviews()}/></div>
    )
  }

}