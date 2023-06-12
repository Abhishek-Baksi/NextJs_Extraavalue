"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";


function Dashboard() {
  const session = useSession();
  console.log(session);

  //NEW WAY TO FETCH DATA in client side
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher
  );

  return (
    <div className={styles.container}>
      <div className={styles.posts}>posts</div>
    </div>
  );
}

export default Dashboard;
