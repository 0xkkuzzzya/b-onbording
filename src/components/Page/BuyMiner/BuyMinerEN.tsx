import styled from "styled-components";
import TelegamLogo from '../../../assets/TelegramLogo.png'
import Gif from '../../../assets/BuyMinerGif.gif'
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    text-align: center;
    margin-bottom: 110px;
`

const Logo = styled.img`
    width: 150px;
    height: 150px;
`

const MainText = styled.a`
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    margin-top: 20px;
`

const Description = styled.a`
    font-size: 15px;
    font-weight: 500;
    color: #858585;
    margin-top: 10px;
`

const JoinWaitlistButton = styled.button`
    width: 90%;
    height: 40px;
    background: #4bb5ef;
    border-radius: 10px;
    margin-top: 30px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
`

const FollowButton = styled.button`
    width: 90%;
    height: 40px;
    background: #211d1f;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LogoinButton = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 3px;
`

const InfoBlock = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const InfoText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #858585;
    line-height: 1.1rem;
`


export const BuyMinerEN = () => {

    useEffect(() => {
        window.Telegram.WebApp.BackButton.hide()
        window.Telegram.WebApp.MainButton.hide()
    }, [])

    return (
        <Container>
            <Logo src={Gif} />
            <MainText>Bytecoin NFT Miners <br /> sale will be live soon.</MainText>
            <Description>Join waitlist and be ready to be among the first Bitcoin miners, aka Bitcoin on TON.</Description>
            <JoinWaitlistButton>Join waitlist</JoinWaitlistButton>
            <Link to="https://t.me/bytecoin_news"
                style={{ width: "100%", textDecoration: "none", display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <FollowButton><LogoinButton src={TelegamLogo} />Follow Bytecoin news</FollowButton>
            </Link>
            <InfoBlock>
                <InfoText>Price per 1 NFT: 48 TON</InfoText>
                <InfoText>Max supply: 3000 NFT Miner</InfoText>
                <InfoText>Team & insiders allocation: 0%</InfoText>
            </InfoBlock>
        </Container>
    )
}