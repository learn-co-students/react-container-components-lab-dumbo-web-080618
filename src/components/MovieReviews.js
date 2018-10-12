// Code MovieReviews Here
import React from 'react'


const MovieReviews = (props) => {
  let movieReviews = props.reviews.map((review) => {
    return (<div className="review" key={review.display_title}> {review.display_title}</div>)
  })
  return (
    <div className="review-list">
      {movieReviews}
    </div>
  )
}

export default MovieReviews
