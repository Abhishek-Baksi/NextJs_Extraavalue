import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./page.module.css"

function BlogPost() {
  return (
    <div className={styles.mainContainer}>
        <Link className={styles.container} href="/testId">
        <div className={styles.imageContainer}> 
        <Image className={styles.img} src="https://images.pexels.com/photos/6913718/pexels-photo-6913718.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' width={400} height={250}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Post</h1>
          <p className={styles.desc}>Description
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, laboriosam eos! Ipsa, officia eius. Corporis, veniam eum expedita exercitationem non eos, itaque, tempora ratione facere totam dolorum modi quia quaerat.
          Dicta nihil autem ipsam suscipit magni consequuntur temporibus a? Placeat veritatis voluptate quaerat ad repellendus beatae sapiente odit aperiam quae, totam eius cupiditate? Velit, quisquam nulla? Quo illum atque corrupti?
          Molestias pariatur aliquam placeat veniam, repudiandae vel dignissimos, necessitatibus itaque magnam consequuntur laboriosam, rerum at ipsam modi fugit repellat totam? Quos ducimus dolorum aperiam, illum inventore laboriosam delectus minus doloribus!
          Ab earum repellat nam, inventore neque distinctio. Quae doloremque cumque accusamus veritatis repudiandae! Sunt deserunt minima, non neque autem eos nam obcaecati suscipit dicta voluptatibus assumenda. Earum ducimus id dolore!
          Fuga expedita ea soluta atque sapiente ipsam modi accusamus illo id eaque nisi, provident nemo perspiciatis eum possimus tempore libero ratione rerum. Natus doloribus at dolore temporibus provident. Repellendus, corrupti.</p>
        </div>
        </Link>
    </div>
  )
}

export default BlogPost