import { useRouter } from 'next/router'
import Axios from "axios";
import { useEffect, useState } from 'react';
import Item from '../../src/component/Item';
import Head from 'next/head';

const Post = ({item, name}) => {
  // const router = useRouter()
  //   const { id } = router.query
    
    // const [item, setItem] = useState({});

  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     setItem(res.data);
  //   });
  //   }
    
    // useEffect(() => { 
    //     if (id && id > 0) {
    //         getData();
    //     }
    // },[id])


    return (
      <div>
        {item &&
          <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name}환경입니다
          <Item item={item}/>
        </>}
      </div>
  )
}

export default Post

//ssr - 브라우저 내부 환경이 아니다
export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name
    }
  }
}

