import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Blog() {
  return (
    <div className={styles.mainContainer}>
        <Link className={styles.container} href="/blog">
        <div className={styles.imageContainer}> 
        <Image className={styles.img} src="https://images.pexels.com/photos/6913718/pexels-photo-6913718.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' width={400} height={250}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog 1</h1>
          <p className={styles.desc}>Description</p>
        </div>
        </Link>
        <Link className={styles.container} href="/testId">
        <div className={styles.imageContainer}> 
        <Image className={styles.img} src="https://images.pexels.com/photos/6913718/pexels-photo-6913718.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' width={400} height={250}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog 2</h1>
          <p className={styles.desc}>Description</p>
        </div>
        </Link>
        <Link className={styles.container} href="/testId">
        <div className={styles.imageContainer}> 
        <Image className={styles.img} src="https://images.pexels.com/photos/6913718/pexels-photo-6913718.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' width={400} height={250}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog 3</h1>
          <p className={styles.desc}>Description</p>
        </div>
        </Link>
    </div>
  )
}

export default Blog