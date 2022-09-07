import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login'
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

export default function Home() {
  
  // state for login
  const [loginPage, setLoginPage] = React.useState(false)

  return (
    <div>
      {!loginPage && <Login setLoginPage={setLoginPage}/>}
      {loginPage &&
        <div> 
          <Head>
            <title>Facebook</title>
            <link rel="icon" href="/favicon.ico" />
          </Head> 
          <Header />
          <main className='flex'>
            <Sidebar />
            <Feed />
            {/* widgets */}
          </main>
        </div>
      }
    </div>
  )
}
