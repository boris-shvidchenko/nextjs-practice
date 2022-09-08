export default function HeaderIcon({ Icon, active }) {
    return (
        <div className='flex items-center cursor-pointer sm:h-14 md:px-5 lg:px-10 active:border-b-2 active:border-white group'>
            <Icon className={`h-5 text-gray-500 group-hover:text-blue-500 text-center sm:h-7 mx-auto ${active && 'text-blue-500'}`}/>
        </div>
    )
}
