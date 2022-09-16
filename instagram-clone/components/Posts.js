import React from 'react';
import { useEffect } from 'react';
import { faker } from '@faker-js/faker'

import Post from './Post'

export default function Posts(){

     // state for post data array
     const[postData, setPostData] = React.useState([]);

     // obtain random data from faker.js and update our state with the new array of data 
     useEffect(() => {
         
         const postsFromFaker = [...Array(10)].map(() => ({
             userId: faker.datatype.uuid(),
             username: faker.internet.userName(),
             caption: faker.lorem.sentence(),
             avatar: faker.image.avatar(),
             image: faker.image.image(),
         }));
         
         setPostData(postsFromFaker);
         
     }, [])

    // map through post data array and render a new Post component for each element
    const posts = postData.map((post) => {
        return (
            <Post key={post.userId} id={post.userId} username={post.username} userImg={post.avatar} img={post.image} caption={post.caption} />
        )
    }) 

    return(
        <div>
            {posts}
        </div>
    )
}
