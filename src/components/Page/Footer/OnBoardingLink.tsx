import styled from "styled-components";
import Onboarding from '../../../assets/OnBoarding.png'
import OnboardingActive from '../../../assets/OnBoardingActive.png'
import { Link, useMatch } from "react-router-dom";

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

interface Props {
    to: string;
}

export const OnBoardingLink = ({ to }: Props) => {

    const match = useMatch(to)

    return (
        <LogoBlock to="/">
            <ImgBlock>
                <Logo src={match  ? OnboardingActive : Onboarding} />
            </ImgBlock>
        </LogoBlock>
    )
}