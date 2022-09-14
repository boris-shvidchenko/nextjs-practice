import React from 'react';
import { useEffect } from 'react'
import { faker } from '@faker-js/faker'

import Story from './Story'

export default function Stories() {

    // state for suggestions array
    const[suggestions, setSuggestions] = React.useState([]);

    // obtain random data from faker.js and update our state with the new array of data 
    useEffect(() => {
        
        const suggestionsFromFaker = [...Array(20)].map(() => ({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            avatar: faker.image.avatar(),
        }));
        
        setSuggestions(suggestionsFromFaker);
        
    }, [])
    
    // map through our state array to return a story component to render
    const suggestionElement = suggestions.map((profile) => {
        return(
            <Story key={profile.userId} username={profile.username} avatar={profile.avatar}/>
        )
    })

    return(
        <div className='flex items-center p-6 space-x-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            {suggestionElement}
        </div>
    )
}