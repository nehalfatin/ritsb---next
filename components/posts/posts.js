import styles from './posts.module.css'
import {AiFillLike} from 'react-icons/ai'
import {ImEye} from 'react-icons/im'
import {FaPlus} from 'react-icons/fa'
import Link from 'next/link'

export default function Posts(props) {
    
  return (

    <div className={styles.posts__container}>
      <div className={styles.profile__container}>
        <img className={styles.profile__image} src={props.profileImage}/>
         <div className={styles.profile__texts}>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.timestamp}>{props.timestamp}</p>
       
        </div>
      </div>
      
      <Link href={`/post/${props.id}`} key={props.id}>
      <a>
      <div>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>

      <img className={styles.post__image} src={props.postImage}/>
      </a>
      </Link>


      <div className={styles.postbuttons}>
        <div className={styles.postbutton}>
          <AiFillLike className={styles.buttonicons}/>
          <p>Like</p>
        </div>
        <div className={styles.postbutton}>
          <ImEye className={styles.buttonicons}/>
          <p>{props.viewCount}</p>
        </div>
        <div className={styles.postbutton}>
          <FaPlus className={styles.buttonicons}/>
          <p>Read later</p>
        </div>
      </div>

      <div className={styles.react__counter}>
        <img src='/Images/likebutton.jpg' />
        <p>{props.reactCount}</p>
      </div>
    </div>
  )
}
