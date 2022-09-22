import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Message from './Message'
import { faker } from '@faker-js/faker';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useState } from 'react';

// temporary fake user messages
let userMessages = [
    {
        message: faker.lorem.lines(),
    },
    {
        message: faker.lorem.lines(),
    }
]

export default function ChatScreen() {
    const [input, setInput] = useState('');
    let userMessageElements = userMessages.map(message => {
        return(
            <Message message={message.message} />
        )
    })
    function sendMessage(e) {
        e.preventDefault();
        setInput('');
    }
    return(
        <Container>
            <Header>
                <ContainerLeft>
                    <Avatar />
                    <HeaderInfo>
                        <h3>Recipient Email</h3>
                        <p>Last seen...</p>
                    </HeaderInfo>
                </ContainerLeft>
                <HeaderIcons>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </HeaderIcons>
            </Header>
            <MessageContainer>
                {userMessageElements}
            </MessageContainer>
            <InputContainer>
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <Input value={input} onChange={e => setInput(e.target.value)}/>
                <button hidden disabled={!input} type='submit' onClick={sendMessage}>Send Message</button>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </InputContainer>
        </Container>
    )
}

const Container = styled.div``;

const Input = styled.input`
    flex: 1;
    outline: 0;
    border: none;
    border-radius: 10px;
    background-color: whitesmoke;
    padding: 20px;
    margin-left: 15px;
    margin-right: 15px;
`;

const InputContainer = styled.form`
    display: flex;
    align-items: center;
    padding: 10px;
    position: sticky;
    bottom: 0;
    background-color: white;
    z-index: 100;
    border-left: 1px solid whitesmoke;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    position: sticky;
    background-color: white;
    z-index: 1;
    top: 0;
    padding: 11px;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
    border-left: 1px solid whitesmoke;
`;

const HeaderInfo = styled.div`
    margin-left: 15px;

    > h3 {
        margin-bottom: 3px;
    }

    > p {
        font-size: 14px;
        color: gray;
    }
`;

const ContainerLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderIcons = styled.div``;

const MessageContainer = styled.div`
    padding: 30px;
    background-color: #e5ded8;
    min-height: 90vh;
`;

