import Image from 'next/image'
import styles from './headerbutton.module.css'

export default function Headerbutton() {
  return (
    <div className={styles.headerbutton__container}>
      <Image src='/Images/rits_text.webp' width={300} height={80} priority objectFit='contain'/>
    </div>
  )
}
