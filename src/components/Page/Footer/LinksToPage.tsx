import styled from "styled-components";
import { OnBoardingLink } from "./OnBoardingLink";
import { LeaderboardLink } from "./LeaderboardLink";
import { BuyMinersLink } from "./BuyMinerLink";


const Container = styled.div`
    width: 95%;
    height: 60px;
    background: #181818;
    position: fixed;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 25px;
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
            <OnBoardingLink to="/"/>
            <BuyMinersLink to="/buyminer"/>
            <LeaderboardLink to="/leaderboard"/>
        </Container>
    )
}