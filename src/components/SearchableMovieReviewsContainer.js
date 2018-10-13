import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
  /*const {display_title, mpaa_rating, critics_pick, byline, headline} = props.review */

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    // *ASYNC: stuff
    
  }

  handleSubmit = (evt) => {
    fetch(URL).then(res => res.json()).then(json => {this.setState({reviews: json.results})}).catch(console.log)
  }



  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="seachTerm" id="searchTerm" onChange={(e) => this.setState({searchTerm: e.target.value})}/>
          <input type="submit" value="submit"/>
        </form>
        {this.state.reviews && <MovieReviews reviews={this.state.reviews}/>}
      </div>
    )
  }
}