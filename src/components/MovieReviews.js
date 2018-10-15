// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = props => {
  return (
  <div className="review-list">
    {props.reviews.map((news, id) => <Review key={id} news={news}/>)}
  </div>
)}

const Review = props =>{
  return (
    <div className="review">
      <h1>{props.news.display_title}</h1>
      <h2>{props.news.headline}</h2>
    </div>
  )
}


MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
