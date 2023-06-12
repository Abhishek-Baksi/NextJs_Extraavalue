import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(
    `https://carmine-jellyfish-tie.cyclic.app/used-product/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data from used-product page");
  }

  return res.json();
}

async function BlogPost({ params }) {
  const deviceData = await getData(params.id);
  return (
    <div className={styles.mainContainer}>
      <Link className={styles.container} href="#">
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src="https://images.pexels.com/photos/6913718/pexels-photo-6913718.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{deviceData.model}</h1>
          <p className={styles.desc}></p>
        </div>
      </Link>
    </div>
  );
}

export default BlogPost;
