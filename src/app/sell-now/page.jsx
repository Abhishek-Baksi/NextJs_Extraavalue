import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/sellnow");

  if (!res.ok) {
    throw new Error("Failed to fetch data from used-product page");
  }

  return res.json();
}

async function SellNowPage({ params }) {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          className={styles.container}
          href={`/sell-now/${item._id}`}
          key={item._id}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={item.image}
              alt=""
              width={400}
              height={250}
            />
          </div>
          
          <div className={styles.content}>
            <h1 className={styles.title}>Brand : {item.brand}</h1>
            <p className={styles.desc}> Model :{item.model}</p>
            <p className={styles.desc}> ID : {item._id}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SellNowPage;
