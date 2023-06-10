import React from "react";
import styles from "@/app/portfolio/page.module.css";
import Link from "next/link";

function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>We Provide Our Customers Stunning</h1>
      <p className={styles.selectTitleDesc}>Selling Value In Just 3 Steps</p>
      <div className={styles.items}>
        <Link className={styles.item} href="./portfolio/illustration">
          <span className={styles.title}>
          Get Best Price
          </span>
        </Link>
        <Link className={styles.item} href="./portfolio/websites">
          <span className={styles.title}>
          Confirm Pickup
          </span>
        </Link>
        <Link className={styles.item} href="./portfolio/apps">
          <span className={styles.title}>
          Instant Payment
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
