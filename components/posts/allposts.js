import { onSnapshot, collection, doc } from 'firebase/firestore'
import React from 'react'
import {useState, useEffect} from 'react'
import { db } from '../../firebase'
import Posts from './posts'


export const List = () => {
    
    const [Users, setName] = useState([])
    useEffect(()=> {
        //onSnapshot detects realtime change in database and updates
        const postData = onSnapshot(collection(db,"Users"),(snapshot)=> {
            setName(snapshot.docs.map(doc=>({...doc.data(), id:doc.id})))
        }); 
        return postData;},[])

    return (

        <div>
            {Users.map(Users=> 
                <div key={Users.id}>
                    <Posts 
                        name={Users.Name}
                        profileImage={Users.ProfileImage}
                        title={Users.Title}
                        subtitle={Users.Subtitle}
                        timestamp={new Date(Users.timestamp?.toDate()).toLocaleDateString()}
                        postImage={Users.postimage}
                        viewCount={Users.Views}
                        reactCount={Users.ReactCount}
                        id={Users.id}
                    />
                </div>
            )}
        </div>
    )
}
