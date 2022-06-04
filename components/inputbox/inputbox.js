import React, {useState} from 'react'
import styles from './inputbox.module.css'
import { useRef} from 'react'

import { collection, addDoc, serverTimestamp} from "firebase/firestore"
import { db } from '../../firebase'
import {MdPermMedia} from 'react-icons/md'
import {IoMdContact} from 'react-icons/io'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import '../../firebase'


const Inputbox = () => {

  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const filepickerRef = useRef(null)

  const[category, setCategory] = useState('None');
  function handleSelectChange(event) {
    setCategory(event.target.value)
  }
  
  const sendPost = async (e) => {
    if((titleRef.current.value == null || titleRef.current.value == '' 
    && nameRef.current.value == null || nameRef.current.value =='')
    || (nameRef.current.value == null || nameRef.current.value =='' 
    && titleRef.current.value == null || titleRef.current.value == '' )
    ) return false;
      addDoc(collection(db, 'Users'),{
      Name: nameRef.current.value,
      Title: titleRef.current.value,
      Subtitle: subtitleRef.current.value,
      Category: category,
      timestamp: serverTimestamp()
    })
    nameRef.current.value=''
    titleRef.current.value=''
    subtitleRef.current.value=''
    e.preventDefault();
  }

  return (

    <div className={styles.input__container}>
      
      <form>
          <div className={styles.profile__container}>
            <div onClick={()=> filepickerRef.current.click()}>
              <IoMdContact className={styles.icon}/>
              <input type='file' ref={filepickerRef} hidden></input>
            </div>
            <input type='text' placeholder='Your name' ref={nameRef} required/>
 
            <select className={styles.custom_select} value={category} onChange={handleSelectChange}>
              <option value="All">All</option>
              <option value="World">World</option>
              <option value="Politics">Politics</option>
              <option value="Games">Games</option>
            </select>
          </div>
         
          <input type='text' placeholder='Title' ref={titleRef} required/>
          <textarea name='message' placeholder='Feel free to write anything'  ref={subtitleRef} rows='5'></textarea>
          
          <div className={styles.bottom__button}>
      
           <div className={styles.filesbutton} onClick={()=> filepickerRef.current.click()}>
              <MdPermMedia/>
              <p>Media</p>
              <input type='file' ref={filepickerRef} accept='image/*, video/*' hidden></input>
           </div>

           <button type='submit' onClick={sendPost}><BsFillArrowRightCircleFill classname={styles.icon}/></button>
          </div>

        </form>

    </div>
  )
}

export default Inputbox


//----------------------------------------------------------------------------
  // async function sendData() {   
  //   if((titleRef.current.value == null || titleRef.current.value == '' && nameRef.current.value == null || nameRef.current.value =='')
  //   || (nameRef.current.value == null || nameRef.current.value =='' && titleRef.current.value == null || titleRef.current.value == '' )
  //   ) return false;
    
  //   await addDoc(collection(db, 'Users'),{
  //     Name: nameRef.current.value,
  //     Title: titleRef.current.value,
  //     Subtitle: subtitleRef.current.value
  //   })
  //   nameRef.current.value=''
  //   titleRef.current.value=''
  //   subtitleRef.current.value=''
  //}


    // const catRef = useRef(null)

  // const options = [
  //   'None', 'Games', 'World', 'Politics'
  // ];
  // const defaultOption = options[0];

  // <Dropdown options={options} className={styles.custom} controlClassName={styles.customcontrol}
  // menuClassName={styles.custommenu} arrowClassName={styles.customarrow} baseClassName='custombase'
  // value={defaultOption}
  // placeholder="Category" />