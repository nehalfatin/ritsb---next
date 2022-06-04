import { onSnapshot, collection, query, orderBy,limit, startAfter, getDocs, doc } from 'firebase/firestore'
import React from 'react'
import {useState, useEffect} from 'react'
import { db } from '../../firebase'
import Posts from './posts'

export const List = () => {

    const [Users, setName] = useState([])

    
    useEffect(()=> {
        //onSnapshot detects realtime change in database and updates
        const postData = onSnapshot(query(collection(db,"Users"),orderBy('timestamp','desc'),limit(3)),(snapshot)=> {
            setName(snapshot.docs.map(doc=>({...doc.data(), id:doc.id})))
        });
        return postData;},[])

    
    // const fetchMore = () => {

    // }

    // if(Users.length === 0) {
    //     return <h1>loading...</h1>
    // }

    return (

        <div>
            {/* <pre>{`${Users[1].id}`}</pre> */}
            {/* <pre>{JSON.stringify(index)}</pre> */}
            {Users.map(Users=> 
                <div key={Users.id}>
                    {/* <p>{`${Users.id}`}</p> */}
                    <Posts 
                        name={Users.Name}
                        profileImage={Users.ProfileImage}
                        title={Users.Title}
                        subtitle={Users.Subtitle}
                        timestamp={new Date(Users.timestamp?.toDate()).toLocaleDateString()}
                        category={Users.Category}
                        postImage={Users.postimage}
                        viewCount={Users.Views}
                        reactCount={Users.ReactCount}
                        readingTime={Users.ReadTime}
                        // video={Users.Video}
                        id={Users.id}
                    />
                </div>
            )}
                {/* <button onClick={fetchMore}>Click me</button> */}
        </div>
    )
}
