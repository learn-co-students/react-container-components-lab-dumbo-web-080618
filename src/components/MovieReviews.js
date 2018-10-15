import React from 'react'

const MovieReviews = ({reviews}) => {
  return(
    <div className ="review-list" >
      {reviews.map(review => makeReviewCard(review))}
    </div>
  )
}

const makeReviewCard = ({display_title, headline, byline, summary_short, link, multimedia, publication_date}) => {
  return(
    <div key={display_title} className="review" >
      <a href={link.url}>
        <strong>{headline}</strong> by {byline}
      </a><br />
      <img alt={display_title} src={multimedia.src} />
      <p>{summary_short}</p>
      <p>Published: {publication_date} </p><br /><br />
    </div>
  )
}
export default MovieReviews
