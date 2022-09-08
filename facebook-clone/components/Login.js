import Image from 'next/image'
import Head from 'next/head'

export default function Login(props) {

    // function that updates setLoginPage state from false to true
    function updatePage() {
        props.setLoginPage(true)
    }

    return(
        <div>
            <Head>
                <title>Facebook</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='grid place-items-center pt-20'>
                <Image src='https://links.papareact.com/5me' width={250} height={250} objectFit='contain'/>
                <h1 onClick={updatePage} className='p-5 mt-10 bg-blue-500 hover:bg-blue-600 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
            </div>
        </div>
    )
}
