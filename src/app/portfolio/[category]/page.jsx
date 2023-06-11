import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

function Category({ params }) {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Get Best Price</h1>
          <p className={styles.desc}>
            Enter your phone details.Get instant buyback offer.Download App and
            complete diagnostics.Seal the deal!
          </p>
          <Button text={"see more"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/6913718/pexels-photo-6913718.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Get Best Price</h1>
          <p className={styles.desc}>
            Enter your phone details.Get instant buyback offer.Download App and
            complete diagnostics.Seal the deal!
          </p>
          <Button text={"see more"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/6913718/pexels-photo-6913718.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
