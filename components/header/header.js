import Image from 'next/image'
import Headerbutton from "./HeaderButtons/headerbutton"
import styles from './header.module.css'
import Link from 'next/link';
import {useRouter} from 'next/router';

import { FaRegClock, FaVideo } from 'react-icons/fa';
import {IoLogoRss} from 'react-icons/io';

export default function Header() {
  
  const router = useRouter();
  
  return (

    <div className={styles.header__container}>
      <div className={styles.bg__container}>
        <Image src='/Images/header_bg.png' layout='fill'/>
      </div>
      <div className={styles.item__container}>
        <Headerbutton/>
        
        <div className={styles.icons__container}>
          <Link href='/moment'>   
            <div className={styles.boxcontainer}>
            <a id="navigation" class='active'>
              <div className={styles.rowcontainer1}>
                <div className={styles.image__bg}>
                  <Image src='/Images/orange_logo_bg.png' height={40} width={40}/>
                </div>
                <FaRegClock className={styles.iconcontainer}/>
              </div>
              <div className={styles.rowcontainer2}>Moment </div>
              </a>
            </div>
         
          </Link>
    
          <Link href='/myposts'>
            <div className={styles.boxcontainer}>
              <div className={styles.rowcontainer1}>
                <div className={styles.image__bg}>
                  <Image src='/Images/orange_logo_bg.png' height={40} width={40}/>
                </div>
                <IoLogoRss className={styles.iconcontainer}/>
              </div>
              <div className={styles.rowcontainer2}>My Post</div>
            </div>
          </Link>

          <Link href='/myvideos'>
            <div className={styles.boxcontainer}>
              <div className={styles.rowcontainer1}>
                <div className={styles.image__bg}>
                  <Image src='/Images/orange_logo_bg.png' height={40} width={40}/>
                </div>
                <FaVideo className={styles.iconcontainer}/>
                </div>
              <div className={styles.rowcontainer2}>My videos</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
