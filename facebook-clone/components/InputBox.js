import Image from 'next/dist/client/image';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';

export default function InputBox() {

    // on submission of post, a refresh of the page is prevented
    function sendPost(event) {
        event.preventDefault();
    }

    return(
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <Image 
                    className='rounded-full'
                    src='https://links.papareact.com/l4v'
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <form className='flex flex-1'>
                    <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type='text' placeholder="What's on your mind, Jack Brown?"/>
                </form>
                <button hidden type='submit' onClick={sendPost}></button>
            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div className='inputIcon'>
                    <CameraIcon className='h-7 text-green-400'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                </div>
                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-300'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling Activity</p>
                </div>
            </div>
        </div>
    )
}
