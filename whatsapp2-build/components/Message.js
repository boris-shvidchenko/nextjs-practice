import styled from 'styled-components';

export default function Message({ message }) {
    return(
        <Container>
            <p>{message}</p>
        </Container>
    )
}

const Container = styled.div``;