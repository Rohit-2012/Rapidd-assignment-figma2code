import React from 'react'
import style from './Button.module.css'
function Button({icon, text, iconColor, textColor}) {
  return (
    <button className={style.outerBox}>
        <span style={{color:iconColor, fontSize:'24px'}} className={style.btnIcon}>{icon}</span>
        <span style={{color:textColor, fontSize:'18px'}}>{text}</span>
    </button>
  )
}

export default Button
