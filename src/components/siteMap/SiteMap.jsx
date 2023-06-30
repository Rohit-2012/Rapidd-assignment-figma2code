import React from 'react'
import style from './SiteMap.module.css'
import {PiShoppingCartSimple} from 'react-icons/pi'
function SiteMap() {
    const listArr = new Array(10).fill('Ipsum Lorem')
    const linksArr = new Array(4).fill('Lorem')
  return (
    <div className={style.mainBox}>
      <div className={style.innerBox}>
        <span className={style.heading}>Illum magnam aliquam</span>
        <div className={style.listItems}>
        {listArr.map((ele, index)=>{
            return(
                <span key={index}>{ele}</span>
            )
        })}
        </div>
      </div>
      <div className={style.hidden}>
        <span className={style.heading}>Quia so minima</span>
        <div className={style.listItems}>
        {listArr.map((ele, index)=>{
            return(
                <span key={index}>{ele}</span>
            )
        })}
        </div>
      </div>
      <div className={style.innerBox}>
        <span className={style.heading}>Quia so minima</span>
        <div className={style.links}>
        {linksArr.map((ele, index)=>{
          return(
            <span key={index}><span><PiShoppingCartSimple/></span>{ele}</span>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default SiteMap
