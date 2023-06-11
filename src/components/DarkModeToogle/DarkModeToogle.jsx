import React from 'react'
import styles from './darkModeToogle.module.css'

const DarkModeToogle = () => {
  return (
    <div className={styles.container}>
        <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} />
    </div>
  )
}

export default DarkModeToogle