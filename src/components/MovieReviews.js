import React from 'react'

const MovieReviews = ({ text }) => {
  
  return( <div className="review-list">
    <h2>{text.display_title}</h2>
    <h2>{text.headline}</h2>
    <h4>{text.byline}</h4>
    <p>{text.date_updated}</p>
    <p>{text.link.url}</p>
    <p>{text.summary_short}</p>
    <h3>{text.opening_date}</h3>
    <img src={`${text.multimedia.src}`} />
  </div>
  )
}

export default MovieReviews;


// Your MovieReviews component should be stateless and functional.
//
// You are free to lay out each review as you like using the data that the API returns, but make sure that the component outputs a top-level element with the class review-list and that each review is wrapped by an element with class review.
