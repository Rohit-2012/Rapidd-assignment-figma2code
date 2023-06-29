import React from 'react'
import style from './Card.module.css'
import Button from '../button/Button'
import {PiLinkBold} from 'react-icons/pi'
function Card({imgURL}) {
  return (
    <div className={style.outerBox}>
      <div className={style.image}>
        <img src={imgURL} />
      </div>
      <div className={style.content}>
      <span style={{wordWrap:'break-word', textAlign:'center'}}>Adipisicing unde vel so dolore, consequatur.</span>
      <Button icon={<PiLinkBold/>} text={'Ipsum Lorem'}/>
      </div>
    </div>
  )
}

export default Card
