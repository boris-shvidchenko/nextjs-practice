import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { useRouter } from 'next/router';

export default function Chat({ id, email, avatar }) {

    const router = useRouter();

    function enterChat() {
        router.push(`/chat/${id}`);
    }

    return(
        <Container onClick={enterChat}>
            <UserAvatar src={avatar} />
            <p>{email}</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    word-break: break-word;

    :hover {
        background-color: #e9eaeb
    }
`;

const UserAvatar = styled(Avatar)`
    margin: 5px;
    margin-right: 15px;
`;
