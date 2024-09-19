import styled from "styled-components";
import SucessfullJoinedSticket from '../../../../assets/SucessfullJoinedSticket.gif'
import TelegamLogo from '../../../../assets/TelegramLogo.png'

const Container = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
`

const Gif = styled.img`
    width: 150px;
    height: 150px;
`

const TextContrainer = styled.div`
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    text-align: center;
`

const MainText = styled.a`
    font-size: 24px;
    font-weight: 500;
    color: #fff;
`

const DescriptionText = styled.a`
    font-size: 15px;
    font-weight: 500;
    color: #858585;
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
    margin-top: 30px;
`

const LogoinButton = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 3px;
`


export const SuccessfullJoinedRU = () => {
    return (
        <Container>
            <Gif src={SucessfullJoinedSticket} />
            <TextContrainer>
                <MainText>
                    Вы успешно присоединились к списку ожидания!
                </MainText>
                <DescriptionText>
                    Дата начала продаж Bytecoin NFT для майнеров будет объявлена в ближайшее время.
                </DescriptionText>
            </TextContrainer>
            <FollowButton><LogoinButton src={TelegamLogo} />Следите за новостями о Bytecoin</FollowButton>
        </Container>
    )
}