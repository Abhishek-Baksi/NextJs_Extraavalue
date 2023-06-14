import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

function SellNowIdlayout({children}) {
 
  return (
    <div> 
        <div className={styles.mainContainer}>
        <Image
              className={styles.img}
              src={'/cashify.jpeg'}
              alt=""
              width={550}
              height={250}
            />
        </div>
        {children}
    </div>
  )
}

export default SellNowIdlayout