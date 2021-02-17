
import React, { useMemo} from 'react';
import Menu from './menu'
import Reviews from './reviews'
import Rating from './rate'


export default function Restaurant({ props }) {
  const { reviews } = props
  const getAverageRestRating = useMemo(
      () => ((reviews.map((review) => review.rating)
      .reduce((current, next) => current + next, 0))/reviews.length), 
      [reviews]
    );

  return(
    <div>
      <Menu menu={ props.menu } />
      <Reviews reviews={ props.reviews } />
      <span>
        Средний рейтинг: <Rating raiting={getAverageRestRating} />
      </span>
    </div>
  )
}