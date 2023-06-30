import React from 'react'
import style from './Banner.module.css'
import {PiLinkBold} from 'react-icons/pi'
function Banner() {
  return (
    <div className={style.mainBox}>
      <div className={style.leftBanner}>
        <img src="https://images.unsplash.com/photo-1587400364540-b78883d60470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="" />
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
            <span className={style.middle} style={{wordWrap:'break-word', textAlign:'center'}}>Adipisicing unde vel so dolore, consequatur.</span>
            <a href="#">Ipsum Lorem</a>
        </div>
      </div>
    </div>
  )
}

export default Banner
