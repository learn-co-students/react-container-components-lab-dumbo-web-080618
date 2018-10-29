// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) =>{


const movieCard = props.reviews.map(review => {
  return(
  <ul className="review">
    <h1> HEADLINE -- {review.headline}</h1>
  </ul>
)
})

return(
<div className="review-list">
  {movieCard}
</div>
)}

export default MovieReviews
