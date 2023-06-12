import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const cur_url = "https://jsonplaceholder.typicode.com/posts";
const main_url = "https://carmine-jellyfish-tie.cyclic.app/used-product";

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

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: `Sell ${post.brand}-${post.model} Device on ExtraaValue`,
    description: `ExtraaValue Sell Device | ${post.model}`
  }
  // try {
  //   const post = await getData(params.id);
  //   return {
  //     title: `ExtraaValue | ${post.brand}`,
  //     description: `ExtraaValue Select Device | ${post.model}`,
  //   };
  // } catch (error) {
  //   console.error("Error generating metadata:", error);
  //   return {
  //     title: "ExtraaValue",
  //     description: "Error generating metadata",
  //   };
  // }
}

async function BlogPost({ params }) {
  const deviceData = await getData(params.id);
  return (
    <div className={styles.mainContainer}>
      <Link className={styles.container} href="#">
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src={deviceData.image}
            alt=""
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Model : {deviceData.model}</h1>
          <p className={styles.desc}>Brand : {deviceData.brand}</p>
          <p className={styles.desc}>Min-Price : {deviceData.minPrice}</p>
          <p className={styles.desc}>Max-Price : {deviceData.maxPrice}</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogPost;
