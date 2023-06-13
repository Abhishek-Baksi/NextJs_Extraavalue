"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";


function Dashboard() {
  const session = useSession();
  

  //NEW WAY TO FETCH DATA in client side
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // const { data, error, isLoading } = useSWR(
  //   `https://jsonplaceholder.typicode.com/posts`,
  //   fetcher
  // );

  const updateSesion =()=>{
    if(session){
      session.user.accessToken="ddd"
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.posts}>posts</div>
      <div>
        <button onClick={()=>console.log(session)}>log sesion</button>
        <button onClick={updateSesion}>update sesion</button>
      </div>
    </div>
  );
}

export default Dashboard;
