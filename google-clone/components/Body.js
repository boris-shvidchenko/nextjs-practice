import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MicrophoneIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Body(){
    
    // useRef hook to pull search content of input
    const inputRef = useRef();

    // route to current url, used to update search results
    const router = useRouter();

    // Search function
    function search(event) {
        event.preventDefault();
        const term = inputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`);
    }

    return (
        <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
            <Image height={100} width={300} src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' />
            <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
                <MagnifyingGlassIcon className='h-5 mr-3 text-gray-500 cursor-pointer' />
                <input ref={inputRef} type='text' className='focus:outline-none flex-grow' />
                <MicrophoneIcon className='h-5 mr-3 text-gray-500 cursor-pointer' />
            </div>
            <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
                <button onClick={search} className='btn'>Google Search</button>
                <button onClick={search} className='btn'>I'm Feeling Lucky</button>
            </div>
        </form>
    )
}