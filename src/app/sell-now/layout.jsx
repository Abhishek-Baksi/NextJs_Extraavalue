import React from 'react'
import styles from "./page.module.css"

function SellNowlayout({children}) {
  
  return (
    <div> 
        <div className={styles.mainContainer}>
          <h1>Sell and get price on Extraavalue instantly</h1>
        </div>
        {children}
    </div>
  )
}

export default SellNowlayout