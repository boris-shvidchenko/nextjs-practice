import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function ChatScreen() {

    const router = useRouter();

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
                {/* Show message */}
                <EndOfMessage />
            </MessageContainer>
        </Container>
    )
}

const Container = styled.div``;

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
    border-left: 1px solid whitesmoke
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

const MessageContainer = styled.div``;

const EndOfMessage = styled.div``;
