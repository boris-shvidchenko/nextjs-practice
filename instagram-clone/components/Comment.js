import { useSession } from 'next-auth/react'

export default function Comment({ comment, username }) {

    const { data: session } = useSession();

    return (
        <div className='ml-10 h-10'>
            <div className='flex items-center space-x-2 mb-3'>
                <img className='h-7 rounded-full' src={session?.user?.image} alt='comment logo'/>
                <p className='text-sm flex-1'><span className='font-bold mr-2'>{username}</span>{comment}</p>
            </div>
        </div>
    )
}