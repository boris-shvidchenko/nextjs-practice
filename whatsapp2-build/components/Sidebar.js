import { Avatar, IconButton, Button, useRadioGroup } from '@mui/material';
import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from 'email-validator';
import { faker } from '@faker-js/faker';
import Chat from './Chat';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// temporary fake user data
let userData = [
    {
        key: faker.datatype.uuid(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
    },
    {
        key: faker.datatype.uuid(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
    },
    {
        key: faker.datatype.uuid(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
    },
    {
        key: faker.datatype.uuid(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
    }
];

export default function Sidebar() {

    // function to go to home page using router
    const router = useRouter();
    function enterHome() {
        router.push(`/`);
    }

    // state used to store array of Chat elements to render
    const [userElement, setUserElement] = useState([])
    // state used to store a counter to be used with dependency array in useEffect below. If userElement is used, infinite loop happens.
    const [count, setCount] = useState(0);

    // map through fake user data to create existing chats
    useEffect(() => {
        let userDataMap = userData.map(user => {
            return(
                <Chat key={user.key} id={user.key} email={user.email} avatar={user.avatar} />
            )
        });
        setUserElement(userDataMap);
    }, [count])
    
    // function creates a new chat if input email does not already exist
    function createChat() {
        const input = prompt('Please enter an email address for the user you wish to chat with');
        let emailExists = false;
        if (!input) return;

        //  checks if input email already exists
        for (let user of userData) {
            if (input === user.email) {
                emailExists = true;
                console.log('Email exists')
            } 
        }

        // validates if email is correct format AND does not already exist 
        if (EmailValidator.validate(input) && !emailExists) {
            userData = [...userData, {key: faker.datatype.uuid(), avatar: faker.image.avatar(), email: input}];
            setCount(prevCount => prevCount + 1)
        }
    }

    return(
        <Container>

            <Header>
                <UserAvatar onClick={enterHome}/>
                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>

            <Search>
                <SearchIcon />
                <SearchInput placeholder='Search in chats' />
            </Search>

            <SidebarButton onClick={createChat}>START A NEW CHAT</SidebarButton>

            {/* Chat Components */}
            {userElement}

            {/* div with icon and email */}

        </Container>
    )
}

// Styled Components 

const Container = styled.div``;

const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 11px;
    height: 80px;
    border-bottom: 1px solid whitesmoke
`;

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    
    :hover {
        opacity: 0.8;
    }
`;

const IconsContainer = styled.div``;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
`;

const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex: 1;
`;

const SidebarButton = styled(Button)`
    width: 100%;
    color: black;
    
    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`;
