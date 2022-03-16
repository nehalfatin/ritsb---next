import Header from "../components/header/header"
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function myvideos() {
  return (
    <div className={styles.container}>
        <Head>
          <title>Rits Browser My Videos</title>
          <link rel='icon' href='/favicon.webp'/>
        </Head>

        <Header/>
        <p>Under Development</p>
    </div>
  )
}
