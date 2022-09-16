import { useSession } from 'next-auth/react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'


export default function Post({ id, username, userImg, img, caption }) {

    const { data: session } = useSession();

    return(
        <div className='bg-white my-7 border rounded-sm'>

            {/* Post Header */}
            <div className='flex items-center p-5'>
                <img className='h-12 w-12 rounded-full object-contain border p-1 mr-3' src={userImg} />
                <p className='flex-1 font font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5 cursor-pointer' />
            </div>

            {/* Post Image */}
            <img className='object-cover w-full' src={img} />

            {/* Post Buttons */}
            {session && (
                <div className='flex justify-between px-4 pt-4'>
                    <div className='flex space-x-4'>
                        <HeartIcon className='post-buttons' />
                        <ChatIcon className='post-buttons' />
                        <PaperAirplaneIcon className='post-buttons' />
                    </div>
                    <BookmarkIcon className='post-buttons' />
                </div>   
            )}

            {/* Post Caption */}
            <p className='p-5 truncate'><span className='font-bold mr-1'>{username}</span>{caption}</p>

            {/* Post Comments */}

            {/* Post Comment Input Box */}
            {session && (
                <form className='flex items-center justify-between p-4'>
                    <div className='flex items-center'>
                        <EmojiHappyIcon className='post-buttons'/>
                        <input className='border-none focus:ring-0 outline-none' type='text' placeholder='Add a comment...' />
                    </div>
                    <button className='font-semibold text-blue-400'>Post</button>
                </form>
            )}

        </div>
    )
}
