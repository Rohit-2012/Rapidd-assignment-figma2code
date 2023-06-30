import React from 'react'
import style from './Button.module.css'
function Button({icon, text}) {
  return (
    <button className={style.outerBox}>
        <span style={{ fontSize:'20px'}} className={style.btnIcon}>{icon}</span>
        <span style={{ fontSize:'14px'}}>{text}</span>
    </button>
  )
}

export default Button
