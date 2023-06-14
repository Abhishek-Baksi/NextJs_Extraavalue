import React from "react";

import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";


async function getData(id) {
  
  const res = await fetch(
    `http://localhost:3000/api/sellnow/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data from sell-now ID page");
  }

  return res.json();
}

export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.brand,
    description: post.model,
  };
}

async function BlogPost({ params }) {
  
  const deviceData = await getData(params.id);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={deviceData.image}
            alt=""
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
        <h6 className={styles.title}>_ID :{deviceData._id}</h6>
          <h1 className={styles.title}>Model :{deviceData.model}</h1>
          <p className={styles.desc}>Brand :{deviceData.brand} </p>
          <p className={styles.desc}>Min-Price : {deviceData.minPrice} </p>
          <p className={styles.desc}>Max-Price : {deviceData.maxPrice} </p>
        </div>
        <Button text={"Click To sell now"} url={"/dashboard/login"}></Button>
      </div>
    </div>
  );
}

export default BlogPost;
