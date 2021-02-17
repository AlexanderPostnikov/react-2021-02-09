import React from 'react'
import Rating from '../rate'
import style from './reviews.module.css'

export default function Reviews(props) {
  const { reviews } = props
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className={style.list}>
          <span  className={style.username}>{review.user}</span>
          <span  className={style.userComment}>{review.text}</span>
          <Rating raiting={ review.rating }/>
        </div>
      ))}
    </div>
  );
}
