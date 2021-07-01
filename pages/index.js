import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import Tile from '../components/Tile/Title'
import axios from 'axios'
import ArticleList from "../components/article/ArticleList";

import useSWR from 'swr';

const fetcher = url => axios.get(url).then(res => res.data)

export default function Home({articles}) {
  console.log("line no 10",articles)
  return (
    <div >
      <Layout>assa
        <Tile/>
        <ArticleList/>
      </Layout>

    </div >
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://restcountries.eu/rest/v2/all`)
//   // const { data, error } = useSWR('https://restcountries.eu/rest/v2/all', fetcher)
//   const articles = res.data

//   return {
//     props: {
//       articles,
//     },
//   }
// }
