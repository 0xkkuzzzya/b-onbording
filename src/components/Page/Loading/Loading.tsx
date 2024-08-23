import styled from "styled-components";
import LoadingGif from '../../../assets/Loading.gif'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #151314;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 50%;
`


export const LeadeboardLoadingPage = () => {
    return(
        <>
        <Container>
            <Logo loading="lazy" src={LoadingGif}/>
        </Container>
        </>
    )
}