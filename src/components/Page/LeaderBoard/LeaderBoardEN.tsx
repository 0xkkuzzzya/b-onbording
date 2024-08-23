import styled from "styled-components";
import Ticket from '../../../assets/Ticket.webp'
import TempLeaderLogo from '../../../assets/BytecoinLogo.webp'
import Cup from '../../../assets/Cup.webp'
import Avatar from '../../../assets/Avatar.webp'
import { LinksToPage } from "../Footer/LinksToPage";
import { useEffect } from "react";
import { useLeaderboard, useUser } from "../../../store/useUsers";
import { BOT } from "../../../const";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 11px;
    margin-bottom: 80px;
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
    display: flex;
    align-items: center;
`

const HedaerLogo = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 3px;
`

const LeadersBlock = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
`

const LeadersLogo = styled.img`
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    border-radius: 50px;
`

const Top1LeaderLogo = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    border-radius: 50px;
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
    margin: 0px 3px;
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
    margin: 0px 3px;
`

const InfoDescription = styled.a`
    font-size: 11px;
    font-weight: 500;
    color: #9da09f;
    margin-top: 3px;
`

const CopyBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CopyReferalButton = styled.button`
    width: 80%;
    height: 45px;
    background: #4ab7ef;
    border-radius: 15px;
    margin-top: 30px;
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    transition: transform .1s ease-in-out;
    &:active {
         transform: scale(0.97);
    }
`

const CopyText = styled.a`
    color: #686667;
    font-weight: 500;
    font-size: 12px;
    margin-top: 10px;
    display: flex;
    align-items: center;
`

const YourPlace = styled.div`
    width: 100%;
    height: 55px;
    background: #232323;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 80px;
    border-top: 1px solid #2e2e2e;
`

const ListLeadersContaier = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const FieldsOtherLeaders = styled.div`
    width: 100%;
    height: 55px;
    background: #232323;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #2e2e2e;
`

const FiledLeaderLogo = styled.img`
    width: 35px;
    height: 35px;
    margin-left: 20px;
    border-radius: 20px;
`

const NameBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
`

const FieldLeaderName = styled.a`
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    display: flex;
    align-items: center;
`

const OtherLeaderTicketAmount = styled.a`
    color: #858585;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
`

const PlaceinField = styled.a`
    color: #858585;
    font-weight: 500;
    font-size: 18px;
    margin-left: auto;
    margin-right: 15px;
`

const FiestPlace = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50px;
    background: #f2bb2d;
    font-size: 10px;
    font-weight: 500;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: -25px;
    margin-left: 31px;
`

const SecondPlace = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50px;
    background: #8d9eae;
    font-size: 10px;
    font-weight: 500;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 58px;
    margin-left: 26px;
`

const ThirdPlace = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50px;
    background: #de7b04;
    font-size: 10px;
    font-weight: 500;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 58px;
    margin-left: 27px;
`

const YourTeg = styled.div`
    width: 24px;
    height: 14px;
    border-radius: 3px;
    background: #4eb0f7;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const YourTegText = styled.a`
    font-size: 10px;
    font-weight: 500;
    color: #fff;
    margin-right: 0px;
    margin-top: 0px;
`


export const LeaderBoardEN = () => {

    const [user, setUser] = useUser()
    const [leaderboard, setLeaderboard] = useLeaderboard()

    const referalText = `${BOT}?startapp=ref_${user.user_id}`

    useEffect(() => {
        window.Telegram.WebApp.BackButton.hide()
        window.Telegram.WebApp.MainButton.hide()
    }, [])

    const copyTextToClipboard = async (referalLink: string) => {
        try {
            await navigator.clipboard.writeText(referalLink);
        } catch (err) {
            console.error(err);
        }
    };

    const formatCash = (n: number) => {
        if (n < 1e3) return n;
        if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
    };

    let users = leaderboard.users.slice(3);

    let component = users.map((user, index) => 
        <FieldsOtherLeaders>
            <FiledLeaderLogo src={user.photo} />
            <NameBlock>
                <FieldLeaderName>{user.username}</FieldLeaderName>
                <OtherLeaderTicketAmount>{user.ticket} <TicketLogo src={Ticket} /></OtherLeaderTicketAmount>
            </NameBlock>
            <PlaceinField>{index + 4}</PlaceinField>
        </FieldsOtherLeaders>
    )

    return (
        <Container>
            <Header>
                <HeaderText><HedaerLogo src={Cup} />Leaderboard</HeaderText>
            </Header>

            <LeadersBlock>
                <LeaderBlock>
                    <div style={{ display: "flex", position: 'relative' }}>
                        <LeadersLogo src={leaderboard.users[1].photo} />
                        <SecondPlace>2</SecondPlace>
                    </div>
                    <LeaderName>{leaderboard.users[1].username}</LeaderName>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                        <TicketLogo src={Ticket} />
                        <TicketAmount>{leaderboard.users[1].ticket}</TicketAmount>
                    </div>
                </LeaderBlock>
                <LeaderBlock style={{ marginBottom: "35px", position: 'relative' }}>
                    <div>
                        <Top1LeaderLogo src={leaderboard.users[0].photo} />
                        <FiestPlace>1</FiestPlace>
                    </div>
                    <LeaderName>{leaderboard.users[0].username}</LeaderName>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                        <TicketLogo src={Ticket} />
                        <TicketAmount>{leaderboard.users[0].ticket}</TicketAmount>
                    </div>
                </LeaderBlock>
                <LeaderBlock>
                    <div style={{ display: "flex", position: 'relative'}}>
                        <LeadersLogo src={leaderboard.users[2].photo} />
                        <ThirdPlace>3</ThirdPlace>
                    </div>
                    <LeaderName>{leaderboard.users[2].username}</LeaderName>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                        <TicketLogo src={Ticket} />
                        <TicketAmount>{leaderboard.users[2].ticket}</TicketAmount>
                    </div>
                </LeaderBlock>
            </LeadersBlock>

            <InfoContainer>
                <InfoBlocks>
                    <div>
                        <InfoText>{user.ticket} <YourTicketLogo src={Ticket} /></InfoText>
                    </div>
                    <InfoDescription>Your Ticket</InfoDescription>
                </InfoBlocks>
                <InfoBlocks>
                    <InfoText>#{leaderboard.rank != 0 ? formatCash(leaderboard.rank) : 0}</InfoText>
                    <InfoDescription>Your rank</InfoDescription>
                </InfoBlocks>
                <InfoBlocks>
                    <InfoText>{user.refs.length}</InfoText>
                    <InfoDescription>Frens invited</InfoDescription>
                </InfoBlocks>
            </InfoContainer>

            <CopyBlock>
                <CopyReferalButton onClick={() => copyTextToClipboard(referalText)}>Copy your referral link</CopyReferalButton>
                <CopyText>Invite premium frens to earn <TicketLogo src={Ticket} /></CopyText>
            </CopyBlock>

            <YourPlace>
                <FiledLeaderLogo src={user.photo == "" ? Avatar : user.photo} />
                <NameBlock>
                    <FieldLeaderName>{user.username}<YourTeg><YourTegText>You</YourTegText></YourTeg></FieldLeaderName>
                    <OtherLeaderTicketAmount>{user.ticket} <TicketLogo src={Ticket} /></OtherLeaderTicketAmount>
                </NameBlock>
                <PlaceinField>{leaderboard.rank != 0 ? formatCash(leaderboard.rank) : 0}</PlaceinField>
            </YourPlace>

            <ListLeadersContaier>
                {component}
            </ListLeadersContaier>
            <LinksToPage />
        </Container>
    )
}