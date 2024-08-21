import styled from "styled-components";
import Tikcet from '../../../assets/Ticket.webp'
import TempLeaderLogo from '../../../assets/BytecoinLogo.webp'
import { LinksToPage } from "../helpers/LinksToPage";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const HeaderText = styled.a`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
`

const HedaerLogo = styled.img`
    width: 15px;
    height: 15px;
`

const LeadersBlock = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
`

const LeadersLogo = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
`

const Top1LeaderLogo = styled.img`
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
`

const LeaderBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LeaderName = styled.a`
    color: #a9a9a9;
    font-weight: 500;
    font-size: 15px;
`

const TicketLogo = styled.img`
    width: 15px;
    height: 15px;
`

const TicketAmount = styled.a`
    color: #a9a9a9;
    font-weight: 400;
    font-size: 13px;
`

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
`

const InfoBlocks = styled.div`
    width: 110px;
    height: 60px;
    background: #232323;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const InfoText = styled.a`
    font-size: 19px;
    font-weight: 500;
    color: #fff;
    display: flex;
    align-items: center;
`

const YourTicketLogo = styled.img`
    width: 25px;
    height: 25px;
`

const InfoDescription= styled.a`
    font-size: 11px;
    font-weight: 500;
    color: #9da09f;
    margin-top: 3px;
`


export const LeaderBoard = () => {
    return (
        <Container>
            <Header>
                <HeaderText>LeaderBoard</HeaderText>
            </Header>

            <LeadersBlock>
                <LeaderBlock>
                    <LeadersLogo src={TempLeaderLogo}/>
                    <LeaderName>U1</LeaderName>
                    <div style={{display: "flex", alignItems: "center", marginTop: "5px"}}>
                        <TicketLogo src={Tikcet}/>
                        <TicketAmount>777</TicketAmount>
                    </div>
                </LeaderBlock>
                <LeaderBlock style={{marginBottom: "35px"}}>
                    <Top1LeaderLogo src={TempLeaderLogo}/>
                    <LeaderName>U2</LeaderName>
                    <div style={{display: "flex", alignItems: "center", marginTop: "5px"}}>
                        <TicketLogo src={Tikcet}/>
                        <TicketAmount>122</TicketAmount>
                    </div>
                </LeaderBlock> 
                <LeaderBlock>
                    <LeadersLogo src={TempLeaderLogo}/>
                    <LeaderName>U3</LeaderName>
                    <div style={{display: "flex", alignItems: "center", marginTop: "5px"}}>
                        <TicketLogo src={Tikcet}/>
                        <TicketAmount>331</TicketAmount>
                    </div>
                </LeaderBlock>   
            </LeadersBlock>

            <InfoContainer>
                <InfoBlocks>
                    <div>
                        <InfoText>10 <YourTicketLogo src={Tikcet}/></InfoText>
                    </div>
                    <InfoDescription>Your Ticket</InfoDescription>
                </InfoBlocks>
                <InfoBlocks>
                    <InfoText>#1K</InfoText>
                    <InfoDescription>Your rank</InfoDescription>
                </InfoBlocks>
                <InfoBlocks>
                    <InfoText>0</InfoText>
                    <InfoDescription>Frens invited</InfoDescription>
                </InfoBlocks>
            </InfoContainer>
            
            <LinksToPage/>
        </Container>
    )
}