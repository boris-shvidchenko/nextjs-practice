import { Avatar, IconButton, Button } from '@mui/material';
import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from 'email-validator';

export default function Sidebar() {

    function createChat() {
        const input = prompt('Please enter an email address for the user you wish to chat with');
        if (!input) return;
        if (EmailValidator.validate(input)) {
            // Add chat/s into Firebase database
        }
    }

    return(
        <Container>

            <Header>
                <UserAvatar />
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

            {/* chat components */}
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
    background-colir: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
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