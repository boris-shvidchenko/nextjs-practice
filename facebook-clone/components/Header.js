import Image from 'next/image';
import HeaderIcon from './HeaderIcon.js';

import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid';
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';

export default function Header() {
    return (
        <div className='flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md'>
            {/* Left */}
            <div className='flex items-center'>
                <Image src='https://links.papareact.com/5me' width={40} height={40} layout='fixed'/>
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600'/>
                    <input className='flex-shrink ml-2 items-center bg-transparent outline-none hidden md:inline-flex' type='text' placeholder='Search Facebook'/>
                </div>
            </div>

            {/* Center */}
            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>

            {/* Right */}
            <div className='flex items-center sm:space-x-2 justify-end'>
                <p className='font-semibold pr-3 whitespace-nowrap'>Jack Brown</p>
                <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' />
            </div>
        </div>
    )
}


