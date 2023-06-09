import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={"https://www.extraavalue.com/images/resource/time.png"}
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Mobile Bazaar</h1>
          <p className={styles.imgDesc}>With New Branding @ Extravaalue</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We ?</h1>
          <p className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum
            is simply. Dummy text of the printing Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Why Extraavalue?</h1>
          <p className={styles.desc}>
            Seal the deal in just 3 steps! Get a price offer, fix a convenient
            location for pickup and finally, receive payment before the phone
            leaves your hands.Say goodbye to standing at a shop counter and
            negotiating or going crazy answering messages from prospective
            buyers when they see your listing on a classifieds platform.
            Extraavalue is a breeze. Best Price - Zero Hassle!
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default About;
