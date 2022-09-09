import Post from './Post';

// temporary hardcoded post data for project
const postData = [
    {
        key:1,
        name:'Jack Brown',
        message:'This is my first post!',
        email:{},
        timestamp:'05/16/2022 1:45',
        image:'',
        postImage:'https://links.papareact.com/l4v'
    }, 
    {
        key:2,
        name:'Jack Brown',
        message:'This is my second post! ',
        email:{},
        timestamp:'05/17/2022 12:13',
        image:'https://links.papareact.com/4zn',
        postImage:'https://links.papareact.com/l4v'
    },
    {
        key:3,
        name:'Jack Brown',
        message:'Another post - Hello!',
        email:{},
        timestamp:'05/17/2022 12:28',
        image:'',
        postImage:'https://links.papareact.com/l4v'
    }
]

export default function Posts() {

    const posts = postData.map(post => {
        return (
            <Post 
                key={post.key}
                name={post.name}
                message={post.message}
                email={post.email}
                timestamp={post.timestamp}
                image={post.image}
                postImage={post.postImage}
            />
        )
    }) 

    return(
        <div>
            {posts}
        </div>
    )
}
