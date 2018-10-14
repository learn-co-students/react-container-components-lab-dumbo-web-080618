import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


export const ReviewList = (props) => {


  return <div className="latest-movie-reviews">
    {props.reviews.map(review => <MovieReviews text={review} />)}
    </div>
}




export default class LatestMovieReviewsContainer extends Component {

  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }



  componentDidMount() {
  fetch(URL)
  .then(res => res.json())
  .then(res => {
    this.setState({
    reviews: res.results
      })
    })
  }

  render(){
    return (
      <div className="latest-movie-reviews" >
        {this.state.reviews ? <ReviewList reviews={this.state.reviews}/> : ''}

    </div>
    )
  }
}
