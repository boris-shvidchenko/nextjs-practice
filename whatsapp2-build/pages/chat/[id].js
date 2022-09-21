import styled from 'styled-components';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar';
import ChatScreen from '../../components/ChatScreen';

export default function Chat() {
    return (
        <Container>
            <Head>
                <title>Chat</title>
            </Head>
            <Sidebar />
            <ChatContainer>
                <ChatScreen />
            </ChatContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;  
`;

const ChatContainer = styled.div`
    flex: 1;
    overflow: scroll;
    height: 100vh;

    ::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`;

