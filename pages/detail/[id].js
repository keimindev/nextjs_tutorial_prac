import { useRouter } from 'next/router'
import Axios from "axios";
import { useEffect, useState } from 'react';
import Item from '../../src/component/Item';
import Head from 'next/head';
import { Loader } from 'semantic-ui-react';

const Post = ({ item, name }) => {
  const router = useRouter();
  
  if (router.isFallback) {
    return (
      <div style={{ padding: '100px 0' }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    )
  }

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

export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  return {
    // paths: [
    //   { params: { id: '740'}},
    //   { params: { id: '730'}},
    //   { params: { id: '729'}},
    // ],
    paths: data.slice(0,9).map((item) => (
      {
      params: {
        id: item.id.toString(),
      }
    }
    )),
    fallback: true,
    //없는 페이지로 나온다. true로 하면 나온다. 첫 로딩시에 path 지정이 안 된 것은 props가 빈 상태로 나오고 이후 로딩이 된 후에 리렌더링하면 빈화면 없이 나온다. 
  }
}

export async function getStaticProps(context) {
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

