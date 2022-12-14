import Head from 'next/head';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';
import requests from '../utilities/requests';

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
      </Head>
      <Header />
      <Navbar />
      <Results results={results}/>
    </div>
  )
}

// will server side render this page 
export async function getServerSideProps(context){
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  .then(res => res.json());
  return {
    props: {
      results: request.results,
    }
  }
}
