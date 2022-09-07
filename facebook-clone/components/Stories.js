import StoryCard from './StoryCard';

const stories = [
    {
        name: 'Sonny Sangha',
        src: 'https://links.papareact.com/zof',
        profile:'https://links.papareact.com/l4v',
    },
    {
        name: 'Elon Musk',
        src: 'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk',
    },
    {
        name: 'Jeff Bezoz',
        src: 'https://links.papareact.com/k2j',
        profile:'https://links.papareact.com/f0p',
    },
    {
        name: 'Mark Zuckerberg',
        src: 'https://links.papareact.com/snf',
        profile:'https://links.papareact.com/snf',
    },
    {
        name: 'Bill Gates',
        src: 'https://links.papareact.com/4u4',
        profile:'https://links.papareact.com/zvy',
    },
]

export default function Stories() {

    //  mapping through stories array to obtain indivudal story data
    const storyCard = stories.map(story => {
        return (
            <StoryCard 
                name={story.name} 
                src={story.src} 
                profile={story.profile}
                key={story.src} 
            />
        )
    })

    console.log(storyCard)

    return(
        <div className='flex justify-center space-x-3 mx-auto'>
            {storyCard}
        </div>
    )
}