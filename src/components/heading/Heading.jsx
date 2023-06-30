import React from 'react'
import styles from './Heading.module.css'
import Button from '../button/Button'
import {PiLinkBold} from 'react-icons/pi'
import {LiaEnvelopeSolid} from 'react-icons/lia'
import {HiOutlineLocationMarker} from 'react-icons/hi'

function Heading() {
  return (
    <>
    <div className={styles.headingDiv}>
      <span>Proident anim <span className={styles.bold}>nor nulla iste.</span></span> 
    </div>
    <div className={styles.bottom}>
      <span>Minim modi yet omnis nor quia so minima.</span>
      <div className={styles.headBtn}>
      <Button icon={<LiaEnvelopeSolid/>} text={'Ipsum Lorem'}/>
      <Button icon={<PiLinkBold/>} text={'Ipsum Lorem'}/>
      <Button icon={<HiOutlineLocationMarker/>} text={'Ipsum Lorem'}/>
      </div>
    </div>
    </>
  )
}

export default Heading
