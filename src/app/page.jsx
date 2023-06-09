import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Best Place to sell your Old Smart Phone!</h1>
        <p className={styles.desc}>Grab the best deal on your old smartphone!</p>
        <Button url="/portpolio" text="See our Service" />
      </div>
      
      <div className={styles.item}>
      <Image src={Hero} alt="" className={styles.img}></Image>
      </div>
      
    </div>
  );
}
