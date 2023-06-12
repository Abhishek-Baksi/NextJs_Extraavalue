import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://carmine-jellyfish-tie.cyclic.app/used-product");

  if (!res.ok) {
    throw new Error("Failed to fetch data from used-product page");
  }

  return res.json();
}

async function Blog({params}) {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        
        <Link className={styles.container} href={`/used-product/${item._id}`}key={item.id}>
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
            <h1 className={styles.title}>Brand : {item.brand}</h1>
            <p className={styles.desc}> Model :{item.model}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
