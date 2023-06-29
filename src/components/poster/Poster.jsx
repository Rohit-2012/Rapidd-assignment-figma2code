import React from 'react'
import style from './Poster.module.css'
import{PiShoppingCartSimple} from 'react-icons/pi'
function Poster() {
  return (
    <div className={style.posterBox}>
      <div className={style.content}>
        <div></div>
        <span className={style.text}>Esse aliquip do, magni!</span>
      </div>
      <button><span><PiShoppingCartSimple/></span>Lorem</button>
    </div>
  )
}

export default Poster
