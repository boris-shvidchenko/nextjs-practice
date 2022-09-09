export default function WidgetContacts({ image, name }) {
    return (
        <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
            <img className='h-10 w-10 rounded-full object-cover' src={image} />
            <p>{name}</p>
            <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full'></div>
        </div>
    )
} 