import React from 'react'
import style from './Banner.module.css'
import {PiLinkBold} from 'react-icons/pi'
function Banner() {
  return (
    <div className={style.mainBox}>
      <div className={style.leftBanner}>
        <div className={style.links}>
            <span><PiLinkBold/>Ipsum Lorem</span>
            <span><PiLinkBold/>Ipsum Lorem</span>
            <span><PiLinkBold/>Ipsum Lorem</span>
        </div>
      </div>
      <div className={style.rightBanner}>
        <div className={style.headings}>
            <span>Numquam. <span style={{fontWeight:'bolder'}}>Esse aliquip do, magni.</span></span>
            <span className={style.bold}>Minima ad for vitae sit</span>
            <a href="#">Ipsum Lorem</a>
        </div>
        <div className={style.imageDiv}>
        </div>
        <div className={style.bottom}>
            <button><span style={{fontSize:'16px'}}><PiLinkBold/></span>Ipsum Lorem</button>
            <span style={{wordWrap:'break-word', textAlign:'center'}}>Adipisicing unde vel so dolore, consequatur.</span>
            <a href="#">Ipsum Lorem</a>
        </div>
      </div>
    </div>
  )
}

export default Banner
