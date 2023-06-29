import React from 'react'
import styles from './Heading.module.css'
import Button from '../button/Button'
import {PiLinkBold} from 'react-icons/pi'

function Heading() {
  return (
    <>
    <div className={styles.headingDiv}>
      <span>Proident anim&nbsp;</span> 
      <span className={styles.bold}>nor nulla iste.</span>
    </div>
    <div className={styles.bottom}>
      <span>Minim modi yet omnis nor quia so minima.</span>
      <div className={styles.headBtn}>
      <Button icon={<PiLinkBold/>} text={'Ipsum Lorem'} iconColor={'#003057'} textColor={'#003057'}/>
      <Button icon={<PiLinkBold/>} text={'Ipsum Lorem'}/>
      <Button icon={<PiLinkBold/>} text={'Ipsum Lorem'}/>
      </div>
    </div>
    </>
  )
}

export default Heading
