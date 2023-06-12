"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToogle from "../DarkModeToogle/DarkModeToogle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portpolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Sell",
    url: "/used-product",
  },
  {
    id: 4,
    title: "About Us",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Extraavalue
      </Link>
      <div className={styles.links}>
        <DarkModeToogle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
      <button
        className={styles.logout}
        onClick={() => console.log("Logged Out")}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
