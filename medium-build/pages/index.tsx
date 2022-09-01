import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import MainImage from '../components/MainImage'
import { postData } from '../data.js';
import Form from '../components/Form'

export default function Home() {

  // maps through the provided data, returns a set of JSX

  const posts = postData.map((post) => {
    return (
      <Link href={`/post/${post.id}`}>
        <div className='cursor-pointer group border rounded-lg overflow-hidden'>
          <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={post.image} alt="Post Image" />
          <div className='p-5'>
            <p className='text-lg font-bold'>{post.title}</p>
            <p className='text-'>{post.description}</p>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <div>
      <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainImage/>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
        {posts}
      </div>
    </div>
    <hr className='my-8 mx-auto border border-yellow-500'/>  
    <Form />
    </div>
  )
}
