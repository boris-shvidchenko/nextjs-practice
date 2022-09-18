import React, { useState } from 'react';
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
import { faker } from '@faker-js/faker'

import Comment from './Comment';


export default function Post({ id, username, userImg, img, caption }) {

    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState(faker.random.numeric(2));
    const [liked, setLiked] = useState(false)

    function sendComment(e) {
        e.preventDefault();
        const commentToSend = comment;
        setComment("");
        setComments(prevComments => [...prevComments, {key: faker.datatype.uuid(), comment: commentToSend, username: session.user.username}])
    }

    const commentsElement = comments.map(comment => {
        return (
            <Comment key={comment.key} comment={comment.comment} username={comment.username} />
        )
    })

    function likePost() {
        if (!liked) {
            setLiked(true);
            setLikes(prevLikes => {
                return(++prevLikes)
            })
        } else {
            setLiked(false);
            setLikes(prevLikes => {
                return(--prevLikes)
            })
        }
    }

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
                        {liked && <HeartIconFilled onClick={likePost} className='post-buttons text-red-500' />}
                        {!liked && <HeartIcon onClick={likePost} className='post-buttons' />}
                        <ChatIcon className='post-buttons' />
                        <PaperAirplaneIcon className='post-buttons' />
                    </div>
                    <BookmarkIcon className='post-buttons' />
                </div>   
            )}

            {/* Post Caption */}
            <p className='p-5 truncate'>
                <p className='font-bold mb-1'>{likes} likes</p>
                <span className='font-bold mr-1'>{username}</span>{caption}
            </p>

            {/* Post Comments */}
            <div className='max-h-40 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                {comments.length > 0 && commentsElement}    
            </div>

            {/* Post Comment Input Box */}
            {session && (
                <form className='flex items-center justify-between p-4'>
                    <div className='flex items-center'>
                        <EmojiHappyIcon className='post-buttons'/>
                        <input className='border-none focus:ring-0 outline-none' type='text' placeholder='Add a comment...' value={comment} onChange={e => setComment(e.target.value)} />
                    </div>
                    <button type='submit' disabled={!comment.trim()} onClick={sendComment} className='font-semibold text-blue-400'>Post</button>
                </form>
            )}

        </div>
    )
}
