import styled from "styled-components";
import Onboarding from '../../../assets/OnBoarding.png'
import BuyMiner from '../../../assets/BuyMiner.png'
import Leaderboard from '../../../assets/Leaderboard.png'
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 95%;
    height: 60px;
    background: #181818;
    position: fixed;
    bottom: 15px;
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

const ImgBlock = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .1s ease-in-out;
    &:active {
         transform: scale(0.85);
    }
`

const Logo = styled.img`
    width: 35px;
    height: 35px;
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
                <ImgBlock>
                    <Logo src={Onboarding} />
                </ImgBlock>
            </LogoBlock>
            <LogoBlock to="/buyminer">
                <ImgBlock>
                    <Logo src={BuyMiner} />
                </ImgBlock>
            </LogoBlock>
            <LogoBlock to="/leaderboard">
                <ImgBlock>
                    <Logo src={Leaderboard} />
                </ImgBlock>
            </LogoBlock>
        </Container>
    )
}