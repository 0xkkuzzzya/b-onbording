import styled from "styled-components";
import Tikcet from '../../../assets/Ticket.webp'
import TempLeaderLogo from '../../../assets/BytecoinLogo.webp'
import Cup from '../../../assets/Cup.webp'
import { LinksToPage } from "../Footer/LinksToPage";
import { useEffect } from "react";

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
`

const Top1LeaderLogo = styled.img`
    width: 80px;
    height: 80px;
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


export const LeaderBoardRU = () => {

    const referalText = "https://t.me/+5435hadsaAHFSssdf"

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

    return (
        <Container>
            <Header>
                <HeaderText><HedaerLogo src={Cup} />Таблица лидеров</HeaderText>
            </Header>

            <LeadersBlock>
                <LeaderBlock>
                    <div style={{ display: "flex", position: 'relative' }}>
                        <LeadersLogo src={TempLeaderLogo} />
                        <SecondPlace>2</SecondPlace>
                    </div>
                    <LeaderName>Пользователь 1</LeaderName>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                        <TicketLogo src={Tikcet} />
                        <TicketAmount>777</TicketAmount>
                    </div>
                </LeaderBlock>
                <LeaderBlock style={{ marginBottom: "35px", position: 'relative' }}>
                    <div>
                        <Top1LeaderLogo src={TempLeaderLogo} />
                        <FiestPlace>1</FiestPlace>
                    </div>
                    <LeaderName>Пользователь 2</LeaderName>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                        <TicketLogo src={Tikcet} />
                        <TicketAmount>122</TicketAmount>
                    </div>
                </LeaderBlock>
                <LeaderBlock>
                    <div style={{ display: "flex", position: 'relative'}}>
                        <LeadersLogo src={TempLeaderLogo} />
                        <ThirdPlace>3</ThirdPlace>
                    </div>
                    <LeaderName>Пользователь 3</LeaderName>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                        <TicketLogo src={Tikcet} />
                        <TicketAmount>331</TicketAmount>
                    </div>
                </LeaderBlock>
            </LeadersBlock>

            <InfoContainer>
                <InfoBlocks>
                    <div>
                        <InfoText>10 <YourTicketLogo src={Tikcet} /></InfoText>
                    </div>
                    <InfoDescription>Ваши билеты</InfoDescription>
                </InfoBlocks>
                <InfoBlocks>
                    <InfoText>#1K</InfoText>
                    <InfoDescription>Ваш рейтинг</InfoDescription>
                </InfoBlocks>
                <InfoBlocks>
                    <InfoText>0</InfoText>
                    <InfoDescription>Пригласите друзей</InfoDescription>
                </InfoBlocks>
            </InfoContainer>

            <CopyBlock>
                <CopyReferalButton onClick={() => copyTextToClipboard(referalText)}>Скопируйте свою реферальную ссылку</CopyReferalButton>
                <CopyText>Приглашайте премиум-друзей, чтобы заработать <TicketLogo src={Tikcet} /></CopyText>
            </CopyBlock>

            <YourPlace>
                <FiledLeaderLogo src={TempLeaderLogo} />
                <NameBlock>
                    <FieldLeaderName>Пользователь 1000 <YourTeg><YourTegText>Вы</YourTegText></YourTeg></FieldLeaderName>
                    <OtherLeaderTicketAmount>11 <TicketLogo src={Tikcet} /></OtherLeaderTicketAmount>
                </NameBlock>
                <PlaceinField>1K</PlaceinField>
            </YourPlace>

            <ListLeadersContaier>
                <FieldsOtherLeaders>
                    <FiledLeaderLogo src={TempLeaderLogo} />
                    <NameBlock>
                        <FieldLeaderName>Пользователь 4</FieldLeaderName>
                        <OtherLeaderTicketAmount>114 <TicketLogo src={Tikcet} /></OtherLeaderTicketAmount>
                    </NameBlock>
                    <PlaceinField>4</PlaceinField>
                </FieldsOtherLeaders>
                <FieldsOtherLeaders>
                    <FiledLeaderLogo src={TempLeaderLogo} />
                    <NameBlock>
                        <FieldLeaderName>Пользователь 5</FieldLeaderName>
                        <OtherLeaderTicketAmount>89 <TicketLogo src={Tikcet} /></OtherLeaderTicketAmount>
                    </NameBlock>
                    <PlaceinField>5</PlaceinField>
                </FieldsOtherLeaders>
                <FieldsOtherLeaders>
                    <FiledLeaderLogo src={TempLeaderLogo} />
                    <NameBlock>
                        <FieldLeaderName>Пользователь 6</FieldLeaderName>
                        <OtherLeaderTicketAmount>65 <TicketLogo src={Tikcet} /></OtherLeaderTicketAmount>
                    </NameBlock>
                    <PlaceinField>6</PlaceinField>
                </FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
                <FieldsOtherLeaders></FieldsOtherLeaders>
            </ListLeadersContaier>
            <LinksToPage />
        </Container>
    )
}