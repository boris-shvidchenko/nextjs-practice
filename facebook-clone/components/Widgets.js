import WidgetContacts from './WidgetContacts';
import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';

// temporary hardcoded contact data for project
const contacts = [
    {src: 'https://links.papareact.com/f0p', name: 'Jeff Bezoz'},
    {src: 'https://links.papareact.com/kxk', name: 'Elon Musk'},
    {src: 'https://links.papareact.com/zvy', name: 'Bill Gates'},
    {src: 'https://links.papareact.com/snf', name: 'Mark Zuckerberg'},
    {src: 'https://links.papareact.com/d0c', name: 'Harry Potter'},
    {src: 'https://links.papareact.com/6gg', name: 'The Queen'},
    {src: 'https://links.papareact.com/r57', name: 'James Bond'},
]

export default function Widgets() {
    
    const contactCard = contacts.map(contact => {
        return (
            <WidgetContacts 
                image={contact.src}
                name={contact.name}
            />
        )
    })
    
    return(
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex items-center justify-between text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6 cursor-pointer' />
                    <SearchIcon className='h-6 cursor-pointer' />
                    <DotsHorizontalIcon className='h-6 cursor-pointer' />
                </div>
            </div>
            {contactCard}
        </div>
    )
}
