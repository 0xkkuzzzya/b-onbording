import styled from "styled-components";
import Tikcet from '../../../assets/Ticket.webp'
import TempLeaderLogo from '../../../assets/BytecoinLogo.webp'
import { LinksToPage } from "../helpers/LinksToPage";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`

const LeadersLogo = styled.img`
    width: 40px;
    height: 40px;
`

const Top1LeaderLogo = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
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
    font-size: 15px;
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
                    <div>
                        <TicketLogo src={Tikcet}/>
                        <TicketAmount>777</TicketAmount>
                    </div>
                </LeaderBlock>
                <LeaderBlock>
                    <LeadersLogo src={TempLeaderLogo}/>
                    <LeaderName>U2</LeaderName>
                    <div>
                        <TicketLogo src={Tikcet}/>
                        <TicketAmount>122</TicketAmount>
                    </div>
                </LeaderBlock> 
                <LeaderBlock>
                    <LeadersLogo src={TempLeaderLogo}/>
                    <LeaderName>U3</LeaderName>
                    <div>
                        <TicketLogo src={Tikcet}/>
                        <TicketAmount>331</TicketAmount>
                    </div>
                </LeaderBlock>   
            </LeadersBlock>
            
            <LinksToPage/>
        </Container>
    )
}