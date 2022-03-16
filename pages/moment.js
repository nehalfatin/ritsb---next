import Header from "../components/header/header"
import styles from '../styles/Home.module.css'

import { List } from "../components/posts/allposts"

export default function moment() {
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.feed}>
        <p> </p>
        <List/>
        </div>
    </div>
  )
}
