// component for the form

export default function Form() {
    return (
        <form className='flex flex-col p-5 max-w-2xl mx-auto mb-10'>
            <h3 className='text-sm text-yellow-500 mb-2'>Enjoyed any of these posts?</h3>
            <h4 className='text-3xl font-bold'>Leave a comment below!</h4>
            <hr className='py-3 mt-2'></hr>
            <label className='block mb-5'>
                <span className='text-gray-700'>Name</span>
                <input className='shadow border rounded py-2 px-3 form-input mt-1 block w-full' placeholder='Name...' type="text" />
            </label>
            <label className='block mb-5'>
                <span className='text-gray-700'>Email</span>
                <input className='shadow border rounded py-2 px-3 form-input mt-1 block w-full' placeholder='Email...' type="email" />
            </label>
            <label className='block mb-5'>
                <span className='text-gray-700'>Comment</span>
                <textarea className='shadow border rounded py-2 px-3 form-input mt-1 block w-full' placeholder='Comment...' rows={8} />
            </label>
            <input type='submit' className='bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-3 rounded cursor-pointer'/>
        </form>
    )
}