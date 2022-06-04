import Header from "../components/header/header"
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Inputbox from "../components/inputbox/inputbox"

import { List } from "../components/posts/allposts"
import Feed from "../components/posts/feed"
import Input from "../components/inputbox/input"

export default function moment() {
  return (
    <div className={styles.container}>
        
        <Head>
          <title>Rits Browser Moment</title>
          <link rel='icon' href='/favicon.webp'/>
        </Head>

        <Header/>
        
        <div className={styles.feed}>
        {/* <Inputbox/> */}
        {/* <List/> */}

        <Input/>
        <List/>
        <Feed/>
        
        </div>
    </div>
  )
}
