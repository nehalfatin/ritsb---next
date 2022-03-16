import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Posts from '../components/posts/posts'

export default function post() {
  return (
    <div className={styles.container}>
      <div className={styles.post__header}>
        <Link href='/moment'>
          <a>
          <p>&lt; Back</p>
          </a>
        </Link>
      </div>
      <p>post</p>
    </div>
  )
}
