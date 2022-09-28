import Head from 'next/head';
import { useRouter } from 'next/router';
import SearchPageHeader from '../components/SearchPageHeader';
import Response from '../Response';
import SearchResults from '../components/SearchResults';

export default function Search({ results }) {

    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
            </Head>
            <SearchPageHeader />
            <SearchResults results={results}/>
        </div>
    )
}

export async function getServerSideProps(context) {
    // useDummyData will be used to store Google search results. Google API limits the number of available searches per day. This variable will be used to prevent that limit from being reached.
    // true = use dummy data, false = use Google API
    const useDummyData = false;
    // pagination setup
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
    .then(response => response.json());
    return {
        props: {
            results: data
        }
    }
    
}