import Avatar from './Avatar';
import Image from 'next/image';
import HeaderOptions from '../components/HeaderOptions';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MicrophoneIcon, XMarkIcon } from '@heroicons/react/24/solid';

export default function SearchPageHeader() {
    
    const router = useRouter();
    const searchInputRef = useRef(null);

    function search(event) {
        event.preventDefault();
        const term =searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`); 
    }

    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
                <Image height={40} width={120} src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' className='cursor-pointer' onClick={() => router.push('/')} />

                <form className='flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 flex-grow'>
                    <input ref={searchInputRef} type='text' className='flex-grow w-full focus:outline-none'/> 
                    <XMarkIcon className='h-7 text-gray-500 cursor cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3' onClick={() => (searchInputRef.current.value = '')} />
                    <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 cursor-pointer border-l-2 pl-4 border-gray-300' />
                    <MagnifyingGlassIcon className='h-6 hidden sm:inline-flex text-blue-500 cursor-pointer' onClick={search} /> 
                    <button hidden type='submit' onClick={search}>Search</button>
                </form>
                <Avatar onClick={() => router.push('/profile')} className='ml-auto' url='https://spng.pngfind.com/pngs/s/527-5275375_png-file-svg-symbol-person-transparent-png.png' />
            </div>
            <HeaderOptions />
        </header>
    )
}