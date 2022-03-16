import Header from "../components/header/header"
import styles from '../styles/Home.module.css'
import Head from 'next/head'

import { List } from "../components/posts/allposts"

export default function moment() {
  return (
    <div className={styles.container}>
        <Head>
          <title>Rits Browser Moment</title>
          <link rel='icon' href='/favicon.webp'/>
        </Head>

        <Header/>
        <div className={styles.feed}>
        <p> </p>
        <List/>
        </div>
    </div>
  )
}
