import Head from "next/head";
import Axios from "axios";
import { useEffect, useState } from "react";
import {Header, Loader, Divider } from 'semantic-ui-react';
import styles from "../styles/Home.module.css";
import ItemList from "../src/component/ItemList";


export default function Home() {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  
  const getData = () => {
    Axios.get(API_URL).then((res) => {
      setList(res.data)
      setIsLoading(true)
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | MIN의 첫 Next</title>
        <meta name="description" content="next tutorial 입니다"></meta>
      </Head>
      {!isLoading ? (
       <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      ) : (
          <>
          <Header as="h3" style={{ paddingTop: 40 }}>The Best</Header>
           <Divider></Divider>
          <ItemList list={list.slice(0,9)}/>
          </>
      )}
      

    </div>
  );
}
