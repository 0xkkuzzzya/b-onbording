import styled from "styled-components";
import Onboarding from '../../../assets/OnBoarding.svg'
import BuyMiner from '../../../assets/BuyMiner.svg'
import Leaderboard from '../../../assets/LeaderBoard.svg'
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 95%;
    height: 60px;
    background: #181818;
    position: fixed;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 25px;
`

const LinkBlock = Link;
const LogoBlock = styled(LinkBlock)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    text-decoration: none;
`

const Logo = styled.img`
    width: 30px;
    height: 30px;
`

const Name = styled.a`
    font-size: 14px;
    font-family: 500;
    color: #a9a9a9;
    margin-top: 5px;
`


export const LinksToPage = () => {
    return (
        <Container>
            <LogoBlock to="/">
                <Logo src={Onboarding} />
            </LogoBlock>
            <LogoBlock to="/buyminer">
                <Logo src={BuyMiner} />
            </LogoBlock>
            <LogoBlock to="/leaderboard">
                <Logo src={Leaderboard} />
            </LogoBlock>
        </Container>
    )
}