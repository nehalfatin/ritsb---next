import Header from "../components/header/header"
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function myposts() {
  return (
    <div className={styles.container}>
        <Head>
          <title>Rits Browser Timeline</title>
          <link rel='icon' href='/favicon.webp'/>
        </Head>

        <Header/>
        <p>Under development</p>
    </div>
  )
}
