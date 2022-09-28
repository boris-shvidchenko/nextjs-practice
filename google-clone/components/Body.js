import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MicrophoneIcon } from '@heroicons/react/24/solid';

export default function Body(){
    return (
        <form className='flex flex-col items-center mt-44 flex-grow'>
            <Image height={100} width={300} src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' />
            <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
                <MagnifyingGlassIcon className='h-5 mr-3 text-gray-500 cursor-pointer' />
                <input type='text' className='focus:outline-none flex-grow' />
                <MicrophoneIcon className='h-5 mr-3 text-gray-500 cursor-pointer' />
            </div>
        </form>
    )
}