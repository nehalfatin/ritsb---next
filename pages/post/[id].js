import { collection, getDocs, doc, getDoc} from "firebase/firestore"
import {db } from '../../firebase'
import styles from '../../styles/Home.module.css'
import styles2 from '../post/post.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Image from "next/image"

export const getStaticPaths = async () => {
    const snapshot = await getDocs(collection(db,'Users'));
    const paths = snapshot.docs.map(doc=> {
        return {
            params: {id: doc.id.toString()}
        }
    })
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context) => {
    const id= context.params.id;
    const docRef = doc(db, 'Users',id);
    const docSnap = await getDoc(docRef);

    return {
        props: {userProps: JSON.stringify(docSnap.data())||null},
        revalidate: 10,
    }
}


const Detail =({userProps}) => {

    const Data = JSON.parse(userProps)

    return(
       <div>
       <Head>
           <title>{Data.Title}</title>
           <link rel='icon' href='/favicon.webp'/>
       </Head>
        <div className={styles.container}>
            <div className={styles.post__header}>
                <Link href='/moment'>
                    <a>
                    <p>&lt; Back</p>
                     </a>
                </Link>
            </div>

            <div className={styles2.posts__container}>

                {Data.postimage && (
                    <Image src={Data.postimage} layout='responsive' width='100%' height='70%' objectFit='contain'/>
                )}
                <div className={styles2.line}></div>
            </div>

            <div className={styles2.texts__container}>
            <h1>{Data.Title}</h1>
            <p>{Data.Subtitle}</p>
            </div>
        </div>
        </div>
    )
}

export default Detail;


