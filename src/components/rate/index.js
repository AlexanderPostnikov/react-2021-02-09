import React from 'react'
import style from './rating.module.css'

export default function Raiting (props) {
  const { raiting } = props
  return (
    <div>
      <span className={style.raiting}>{raiting}</span>
    </div>
  )
  
}
