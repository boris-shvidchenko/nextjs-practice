import styled from 'styled-components';

export default function Chat({ key, users, avatar }) {
    return(
        <Container>
            <p>{users}</p>
        </Container>
    )
}

const Container = styled.div`

`;