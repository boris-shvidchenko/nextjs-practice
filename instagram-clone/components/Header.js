import Image from 'next/dist/client/image'

import { 
    SearchIcon, 
    PlusCircleIcon, 
    UserGroupIcon, 
    HeartIcon, 
    PaperAirplaneIcon, 
    MenuIcon, 
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'


export default function Header() {
    return (
        <div>
            <div className='flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto '>

                {/* Instagram Logo */}
                <div className='hidden lg:inline-grid relative w-24 cursor-pointer'>
                    <Image src='https://links.papareact.com/ocw'layout='fill' objectFit='contain'/>
                </div>

                <div className='lg:hidden relative w-10 flex-shrink-0 cursor-pointer'>
                    <Image src='https://links.papareact.com/jjm'layout='fill' objectFit='contain'/>
                </div>

                {/* Middle Search Tab */}
                <div className='max-w-xs'>
                    <div className='flex justify-between mt-1 relative p-3 rounded-md'>
                        <div className='absolute inset-y-0 flex items-center pointer-events-none pl-3'>
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input className='block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border_black' type='text' placeholder='Search' />
                    </div>
                </div>

                {/* Right Side Buttons */}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon  className='header-buttons'/>
                    <div className='relative header-buttons'>
                        <PaperAirplaneIcon className='header-buttons rotate-45' />
                        <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white'>3</div>
                    </div>
                    <MenuIcon className='h-6 md:hidden cursor-pointer' />
                    <PlusCircleIcon className='header-buttons' />
                    <UserGroupIcon className='header-buttons' />
                    <HeartIcon className='header-buttons' />
                    <img className='h-10 cursor-pointer' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKG2nIby2WNJad1yBH9NWZUYT9V8z0z4Ej4jeEVfcwczQXLm55kcwl7MWkEOIhza2rJg&usqp=CAU' alt='profile picture'/>
                </div>

            </div>
        </div>

        
    )
}