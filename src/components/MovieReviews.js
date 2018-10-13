// Code MovieReviews Here
import React from 'react';


const movieReview = (movie) => {
  return (
    //keys of display_title, critics_pick, byline, headline, date_updated, link.url, link['suggest_link_text'], summary_short
    <div className="review" key={movie.display_title}>
      <h1>{movie.display_title}</h1>
      <p>By {movie.byline}</p>
      <p>{movie.summary_short}</p>
    </div>
  )
}

const movieReviews = (props) => {
  if (props.reviews !== []){
    return props.reviews.map((movie) => {
      return movieReview(movie)
    })
  }
}

//expect props to have array of movies
const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {movieReviews(props)}
    </div>
  )
}

export default MovieReviews
