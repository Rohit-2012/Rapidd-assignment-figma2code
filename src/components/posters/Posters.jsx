import React from 'react'
import style from './Posters.module.css'
import Poster from '../poster/Poster'
function Posters() {
  return (
    <div className={style.posterContainer}>
      <Poster/>
      <Poster/>
      <Poster/>
    </div>
  )
}

export default Posters
