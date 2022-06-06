import Head from "next/head";
import Axios from "axios";
import { useEffect, useState } from "react";
import {Header, Loader, Divider } from 'semantic-ui-react';
import styles from "../styles/Home.module.css";
import ItemList from "../src/component/ItemList";


export default function Home({list}) {
  return (
    <div>
      <Head>
        <title>HOME | MIN의 첫 Next</title>
        <meta name="description" content="next tutorial 입니다"></meta>
      </Head>
          <Header as="h3" style={{ paddingTop: 40 }}>The Best</Header>
           <Divider></Divider>
          <ItemList list={list.slice(0,9)}/>

    </div>
  );
}


//ssr - 브라우저 내부 환경이 아니다
export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name
    }
  }
}

