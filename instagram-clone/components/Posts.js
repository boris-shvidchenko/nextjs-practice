import Post from './Post'

export default function Posts(){

    // temp hardcoded data
    const postData = [
        {
            id: '123',
            username: 'ssssangha',
            userImg:'https://links.papareact.com/3ke',
            img: 'https://links.papareact.com/3ke', 
            caption: 'This is DOPE!'
        },
        {
            id: '23',
            username: 'ssssangha',
            userImg:'https://links.papareact.com/3ke',
            img: 'https://links.papareact.com/3ke', 
            caption: 'This is DOPE!'
        },
        {
            id: '12',
            username: 'ssssangha',
            userImg:'https://links.papareact.com/3ke',
            img: 'https://links.papareact.com/3ke', 
            caption: 'This is DOPE!'
        },
        {
            id: '1234',
            username: 'ssssangha',
            userImg:'https://links.papareact.com/3ke',
            img: 'https://links.papareact.com/3ke', 
            caption: 'This is DOPE!'
        }
    ]

    // map through post data array and render a new Post component for each element
    const posts = postData.map((post) => {
        return (
            <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
        )
    }) 

    return(
        <div>
            {posts}
        </div>
    )
}