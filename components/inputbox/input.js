import React, {useState, useRef} from 'react'
import styles from './inputbox.module.css'

import {MdPermMedia} from 'react-icons/md'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {AiOutlineCloseCircle} from 'react-icons/ai'

import { storage, db } from '../../firebase'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import {getDownloadURL, ref, uploadString} from 'firebase/storage'


function Input() {
    const[title, setTitle] = useState('');
    const[subtitle,setSubtitle] = useState('');
    const[category, setCategory] = useState('None');
    const[loading, setLoading] = useState(false);
    const[selectedFile, setSelectedFile] = useState(null);
    const filepickerRef = useRef(null)

    const sendPost = async () => {
      if(loading) return;
      setLoading(true);

      const docRef = await addDoc(collection(db, 'Posts'),{
        // id: session.user.uid,
        // username: session.user.name,
        // userImg: session.user.image,
        // tag: session.user.tag,
        title: title,
        subtitle: subtitle,
        timestamp: serverTimestamp(),
      });

      const mediaRef = ref(storage, `Posts/${docRef.id}/mediafile`);

      if(selectedFile) {
        await uploadString(mediaRef, selectedFile, 'data_url').then(async () => {
          const downloadURL = await getDownloadURL(mediaRef);
          await updateDoc(doc(db,'posts',docRef.id),{
            mediafile: downloadURL,
          })
        })
      };

      setLoading(false);
      setTitle('');
      setSelectedFile(null);
      setSubtitle('');
      setCategory('None')
    }
    
    const addFileToPost = (e) => {
      const reader = new FileReader();
      if(e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }

      reader.onload = (readerEvent) =>{
        setSelectedFile(readerEvent.target.result);
      }
    };

  return (
    
    <div className={styles.input__container}>
      
        <div className={styles.profile__container}>
            <img src='/Images/63007.jpg' className={styles.profile__image}  alt=''/>
            <input type='text' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option value="All">All</option>
              <option value="World">World</option>
              <option value="Politics">Politics</option>
              <option value="Games">Games</option>
            </select>
        </div>
        <textarea name='message' placeholder='Express your thoughts'  value={subtitle} 
            onChange={(e)=>setSubtitle(e.target.value)} required rows='3'></textarea>
        
        {selectedFile && (
                <div className={styles.selected_file}>
                    <div className={styles.cross_button} onClick={()=> setSelectedFile(null)}>
                    <AiOutlineCloseCircle/>
                    </div>
                    <img src={selectedFile} alt='' style={{objectFit:'contain', borderRadius:'5px',}}/>
                </div>
            )}

          {!loading && (
          <div className={styles.bottom__button} >
            <div className={styles.filesbutton} onClick={()=> filepickerRef.current.click()}>
              <MdPermMedia/>
              <p>Media</p>
              <input type='file' onChange={addFileToPost} ref={filepickerRef} accept='image/*, video/*' hidden></input>
            </div>
            <button disabled={!title.trim() && !selectedFile} onClick={sendPost}><BsFillArrowRightCircleFill classname={styles.icon}/></button>
        </div> 
        )}
    
    </div>
 
  )
}

export default Input