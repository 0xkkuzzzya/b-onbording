import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Ticket from '../../assets/Ticket.webp'
import BytecoinLogo from '../../assets/BytecoinLogo.webp'
import Teaher from '../../assets/Teacher.webp'
import Speacker from '../../assets/Speacker.webp'
import Megaphone from '../../assets/Megaphone.webp'
import Twitter from '../../assets/X.svg'
import Diamond from '../../assets/Diamond.png'
import Copy from '../../assets/Copy.png'

const Container = styled.div`
    width: 80%;
	height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
`

const HeaderBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 20px;
`

const HeaderMainText = styled.a`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
`

const HeaderDescriptionText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    margin-top: 10px;
    display: flex;
    align-items: center;
`

const TicketLogo = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 5px;
`

const IntroBlock = styled.div`
    width: 100%;
    height: 60px;
    border: 1px solid #353537;
    border-radius: 12px;
    display: flex;
    align-items: center;
    margin-top: 10px;
`

const Logoblock = styled.div`
    width: 40px;
    height: 40px;
    background: #252525;
    border-radius: 10px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const IntroLogoGradient = styled.div`
    width: 26px;
    height: 26px;
    background: linear-gradient(to right, #7ac0fd, #3098fe);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const IntroLogo = styled.img`
    width: 24px;
    height: 24px;
`

const TextinsideBlock = styled.a`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin-left: 15px;
`

const SectionText = styled.a`
    font-size: 18px;
    font-weight: 500;
    color: #fff;
`

const TasksBlock = styled.div`
    width: 100%;
    height: 60px;
    border: 1px solid #353537;
    border-radius: 12px;
    display: flex;
    align-items: center;
    margin-top: 10px;
`

const TasksDescription = styled.a`
    font-size: 10px;
    font-weight: 500;
    color: #9da09f;
    margin-left: 15px;
`

const ReferalBlock = styled.div`
    width: 100%;
    height: 50px;
    background: #000;
    border-radius: 15px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

const CopiedBlock = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    transition: transform .1s ease-in-out;
    &:active {
         transform: scale(0.85);
    }
`

const ReferalText = styled.a`
    width: 70%;
    color: #ababab;
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 15px;
`

const ShareButton = styled.button`
    width: 100%;
    height: 50px;
    background: #4ab6ed;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
`

const Text = styled.a`
    font-size: 12px;
    font-weight: 500;
    color: #9da09f;
    margin-top: 10px;
    display: flex;
    align-items: center;
`


export const MainPage = () => {

    const [referal, setReferal] = useState()

    const referalText = "https://t.me/+5435hadsaAHFSssdf"

    const copyTextToClipboard = async (referalLink: string) => {
        try {
            await navigator.clipboard.writeText(referalLink);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container>
            <HeaderBlock>
                <HeaderMainText>Bytecoin onbording</HeaderMainText>
                <HeaderDescriptionText>Learn about Bytecoin & earn 10 <TicketLogo src={Ticket} /></HeaderDescriptionText>
            </HeaderBlock>

            <div style={{ width: "100%", marginTop: "20px" }}>
                <SectionText>Intro</SectionText>
            </div>
            <Link to="/Stories"
                style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                <IntroBlock>
                    <Logoblock>
                        <IntroLogoGradient>
                            <IntroLogo src={BytecoinLogo} />
                        </IntroLogoGradient>
                    </Logoblock>
                    <TextinsideBlock>Whats is Bytecoin</TextinsideBlock>
                </IntroBlock>
            </Link>

            <div style={{ width: "100%", marginTop: "20px" }}>
                <SectionText>Tasks</SectionText>
            </div>
            <TasksBlock>
                <Logoblock>
                    <IntroLogo src={Teaher} />
                </Logoblock>
                <TextinsideBlock>Test Time</TextinsideBlock>
            </TasksBlock>

            <Link to="https://t.me/bytecoin_news"
                style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                <TasksBlock>
                    <Logoblock>
                        <IntroLogo src={Megaphone} />
                    </Logoblock>
                    <TextinsideBlock>Subscribe to channel</TextinsideBlock>
                </TasksBlock>
            </Link>

            <Link to="https://t.me/bytecoin_forum"
                style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                <TasksBlock>
                    <Logoblock>
                        <IntroLogo src={Speacker} />
                    </Logoblock>
                    <TextinsideBlock>Join forum</TextinsideBlock>
                </TasksBlock>
            </Link>

            <Link to=""
                style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                <TasksBlock>
                    <Logoblock style={{ background: "#000" }}>
                        <IntroLogo src={Twitter} />
                    </Logoblock>
                    <TextinsideBlock>Folow our X</TextinsideBlock>
                </TasksBlock>
            </Link>

            <Link to="https://t.me/bytecoindev_bot"
                style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                <TasksBlock>
                    <Logoblock>
                        <IntroLogo src={Diamond} />
                    </Logoblock>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <TextinsideBlock>Try demo</TextinsideBlock>
                        <TasksDescription>Mine Bytecoin in TON testnet</TasksDescription>
                    </div>
                </TasksBlock>
            </Link>

            <div style={{ width: "100%", marginTop: "20px" }}>
                <SectionText>Your referal link</SectionText>
            </div>
            <ReferalBlock>
                <ReferalText>{referalText}</ReferalText>
                <CopiedBlock onClick={() => copyTextToClipboard(referalText)}>
                    <IntroLogo src={Copy} />
                </CopiedBlock>
            </ReferalBlock>
                <a href="https://t.me/share/url?url=https://t.me/bytecoindev_bot&text=join us to test our project!" target="_blank" style={{width: "100%", marginTop: "20px"}}>
                    <ShareButton >Share</ShareButton>
                </a>
            <div style={{ width: "100%" }}>
                <Text>You will earn 5<TicketLogo src={Ticket} /> for a premium user.</Text>
            </div>
        </Container>
    )
}