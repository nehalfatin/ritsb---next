import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getProviders, getSession, useSession} from 'next-auth/react';
import Login from '../components/login/Login';

export default function Home({providers}) {

  const {data: session} = useSession();
  if(!session) return <Login providers={providers}/>;
  
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

export async function getServerSideProps(context) {
  const providers = await getProviders();
  //const session = await getSession(context);

  return {
    props:{
      providers,
      //session,
    }
  }
}