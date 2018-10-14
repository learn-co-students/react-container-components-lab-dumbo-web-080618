import React from 'react'

const MovieReviews = ({ text }) => {
  return( <div className="review-list">
    <h2>{text.display_title}</h2>
    <h2>{text.headline}</h2>
    <h4>{text.byline}</h4>
    <p>{text.date_updated}</p>
    <a href={text.link.url}>Link to article</a>
    <p>{text.summary_short}</p>
    <h3>{text.opening_date}</h3>
    {text.multimedia ? <img src={`${text.multimedia.src}`} /> : ''}
  </div>
  )
}

export default MovieReviews;
