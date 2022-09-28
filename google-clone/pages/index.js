import Head from 'next/head';
import Header from '../components/Header';
import Body from '../components/Body';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
      </Head>
      <Header />
      <Body />
    </div>
  )
}
