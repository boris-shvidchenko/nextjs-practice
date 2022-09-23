import requests from '../utilities/requests';

export default function Navbar() {
    return (
        <nav>
            <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 w-500 overflow-x-scroll h-16 scrollbar-thin scrollbar-thumb-[#114b61] xl:scrollbar-hide xl:space-x-8 xl:justify-around'>
                {Object.entries(requests).map(([key, { title, url}]) => (
                    <h2 key={key} className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24 h-8 xl:text-xl'>{title}</h2>
                ))}
            </div>
        </nav>
    )
}

// NOTE: Make scrollbar cleaner? (give it x margin and rounded edges?)