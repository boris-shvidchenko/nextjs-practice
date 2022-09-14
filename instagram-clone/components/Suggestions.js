import React from 'react';
import { useEffect } from 'react'
import { faker } from '@faker-js/faker'

import Suggestion from './Suggestion'

export default function Suggestions() {

        // state for suggestions array
        const[suggestions, setSuggestions] = React.useState([]);

        // obtain random data from faker.js and update our state with the new array of data 
        useEffect(() => {
            
            const suggestionsFromFaker = [...Array(5)].map(() => ({
                userId: faker.datatype.uuid(),
                username: faker.internet.userName(),
                avatar: faker.image.avatar(),
                company: faker.company.name(),
            }));
            
            setSuggestions(suggestionsFromFaker);
            
        }, [])
        
        // map through our state array to return a story component to render
        const suggestionElement = suggestions.map((profile) => {
            return(
                <Suggestion key={profile.userId} username={profile.username} avatar={profile.avatar} company={profile.company}/>
            )
        })

    return(
        <div className='mt-4 ml-10'>
            <div className='flex items-center justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
                <button className='text-gray-600 font-semibold'>See All</button>
            </div>
            {suggestionElement}
        </div>
    )
}