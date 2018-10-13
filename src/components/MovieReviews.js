// Code MovieReviews Here
import React from 'react'
const MovieReviews = (props) => {
  return (
    <div className="review-list">{getReviews(props)}</div>
  )
}
export default MovieReviews

const getReviews = (props) =>
{
  return props.reviews.map(review => {
    const {display_title, mpaa_rating, critics_pick, byline, headline} = review
    return (
      <div className="review" key={display_title}>
      <h2>{headline}</h2>
      <p>written by: {byline}</p>
      <h3>{display_title}</h3>
      {critics_pick === 0? null : <p>Critic's Pick!!</p>}
      <p>{mpaa_rating === "" ?"This film is not rated." : `Rated: ${mpaa_rating}`}</p>
    </div>
    )
  })
} 