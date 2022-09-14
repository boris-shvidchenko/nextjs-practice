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
    return(
        <div className='bg-white my-7 border rounded-sm'>

            <div className='flex items-center p-5'>
                <img className='h-12 w-12 rounded-full object-contain border p-1 mr-3' src={userImg} />
                <p className='flex-1 font font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5 cursor-pointer' />
            </div>

            <img className='object-cover w-full' src={img} />

            <div className='flex justify-between px-4 pt-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='post-buttons' />
                    <ChatIcon className='post-buttons' />
                    <PaperAirplaneIcon className='post-buttons' />
                </div>
                <BookmarkIcon className='post-buttons' />
            </div>

            {/* Likes */}
            {/* username */}
            {/* captions */}

            <div>
                {/* Smiley Face */}
                {/* Input */}
                {/* Post button (submission) */}
            </div>

        </div>
    )
}