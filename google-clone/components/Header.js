import Link from 'next/link';
import Avatar from './Avatar';
import { Squares2X2Icon } from '@heroicons/react/24/solid';

export default function Header(){
    return (
        <header className='flex justify-between w-full p-5 text-sm text-gray-700'>
            <div className='flex space-x-4 items-center'>
                <Link href='/about'><p className='link'>About</p></Link>
                <Link href='/profile'><p className='link'>Profile</p></Link>
            </div>
            <div className='flex space-x-4 items-center'>
                <Link href='/gmail'><p className='link'>Gmail</p></Link>
                <Link href='/images'><p className='link'>Images</p></Link>
                <Squares2X2Icon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
                <Avatar url='https://spng.pngfind.com/pngs/s/527-5275375_png-file-svg-symbol-person-transparent-png.png' />
            </div>
        </header>
    )
}