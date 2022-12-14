import Link from 'next/link';

export default function Avatar({ url, className }){
    return (
        <Link href='/profile'>
            <img className={`rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`} loading='lazy' src={url} alt='Profile picture' />
        </Link>
    )
}