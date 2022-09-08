import Image from 'next/dist/client/image'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

export default function Post(props) {
    return(
        <div className='flex flex-col mt-5 p-5 bg-white rounded-t-2xl shadow-sm'>
            <div className='flex items-center space-x-2'>
                <Image 
                    className='rounded-full'
                    src={props.postImage}
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <div>
                    <p className='font-medium'>{props.name}</p>
                    <p className='text-xs text-gray-400'>{props.timestamp}</p>
                </div>
            </div>
            <div>
                <p className='pt-4 pb-4'>{props.message}</p>
                {props.image && 
                    <Image                           
                        src={props.image}
                        width={500}
                        height={250}
                        objectFit='cover'
                    />
                }
            </div>
            <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t mt-4'>
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <ThumbUpIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                <div className='inputIcon rounded-none'>
                    <ChatAltIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>
                <div className='inputIcon rounded-none rounded-br-2xl'>
                    <ShareIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
            </div>
        </div>
    )
}