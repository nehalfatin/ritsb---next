import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  
  return (
    <div>
    <Head>
      <title>Rits App</title>
      <link rel='icon' href='/favicon.webp'/>
    </Head>
    <div className={styles.bg__image}></div>
    <div className={styles.bg__text}>
      <Link href='/moment'>
        <a>
        <p> PROCEED TO APP </p>
        </a>
      </Link>
    </div>
    </div>
  )
}
