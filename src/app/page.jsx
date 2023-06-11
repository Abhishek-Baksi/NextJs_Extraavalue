"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Best Place to sell your Old Smart Phone!
        </h1>
        <p className={styles.desc}>
          Grab the best deal on your old smartphone!
          <br />
          {/* this is added remove the span typewriter-container and use-client and br */}
          <span style={{ color: "#53c28b", fontWeight: "bold" }}>
            <span
              style={{ color: "white", fontSize: "20px", fontWeight: "normal" }}
            >
              Instant
            </span>{" "}
            <Typewriter
              words={["Payment", "Price", "Pickup"]}
              loop={true}
              delayBetweenLetters={75}
              delayBetweenWords={1000}
            />
            <span>|</span>
          </span>
        </p>
        <Button url="/portpolio" text="See our Service" />
      </div>

      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img}></Image>
      </div>
    </div>
  );
}
