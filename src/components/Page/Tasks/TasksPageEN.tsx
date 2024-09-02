import styled from "styled-components";
import { useState, useCallback, useEffect } from "react";
import { Task, TasksEN } from "../../../store/useTasks";
import { Link, useNavigate } from "react-router-dom";
import Complete from "../../../assets/Complete.webp";
import Error from "../../../assets/Error.webp";
import CompleteLogoSticker from "../../../assets/CompleteTasks.webp";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 15px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
`;

const RadioLabel = styled.label`
    width: 90%;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #FFFFFF;
    font-size: 16px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    margin-top: 15px    ;
`;

const RadioInput = styled.input`
    display: none;
`;

const ResultImage = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;

const SelectCircle = styled.div`
    width: 17px;
    height: 17px;
    border: 2px solid #333;
    border-radius: 50%;
    margin-right: 5px;
    transition: background-color 0.3s ease;
`;

const NextButton = styled.button`
    width: 100%;
    height: 40px;
    background-color: #555;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #3A91C1;
    }

    &:disabled {
        background-color: #2A2A2A;
        cursor: not-allowed;
    }
`;

const ProgressBar = styled.div`
    width: 90%;
    height: 10px;
    background-color: #2A2A2A;
    border-radius: 5px;
    margin-bottom: 20px;
    overflow: hidden;
`;

const Progress = styled.div<{ width: number }>`
    width: ${props => props.width}%;
    height: 100%;
    background-color: #4AB6ED;
    transition: width 0.3s ease;
`;

const AnswerContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    color: #FFFFFF;
    font-size: 16px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
`;

const CompleteLogo = styled.img`
    width: 220px;
    height: 220px;
    margin-top: 50px;
`;

const HomeButton = styled.button`
    width: 90%;
    height: 40px;
    background-color: #4AB6ED;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    position: fixed;
    bottom: 15px;
    &:active {
        transform: scale(0.98);
        transition: transform 0.2s ease;
    }
`


export const TasksPageEN = () => {
        const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
        const [selectedAnswer, setSelectedAnswer] = useState("");
        const [isResult, setIsResult] = useState(false);
        const [isCorrect, setIsCorrect] = useState(false);
        const navigate = useNavigate();

        let component;
        console.log(currentTaskIndex)

        useEffect(() => {
                console.log("USE: " + currentTaskIndex)
                window.Telegram.WebApp.BackButton.show()
                window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))
                window.Telegram.WebApp.MainButton.hide()
        }, [currentTaskIndex]);

        const handleAnswerSelect = (answer: string) => {
                setIsResult(true);
                setSelectedAnswer(answer);
                setIsCorrect(TasksEN[currentTaskIndex].correctAnswer === answer);
                window.Telegram.WebApp.MainButton.show()

                window.Telegram.WebApp.MainButton.onClick(handleNextQuestion)

                window.Telegram.WebApp.MainButton.setParams({
                        text: "Next question",
                        color: '#4AB6ED',
                        is_active: false
                });
        }

        const handleNextQuestion = () => {
                console.log("CLICK")
                setCurrentTaskIndex(prevIndex => prevIndex + 1);
                setSelectedAnswer("");
                setIsCorrect(false);
                setIsResult(false);
        }


        /*if (currentTaskIndex == TasksEN.length - 1) {
                component = (
                        <Container>
                                <Title>All tasks completed!</Title>
                                <CompleteLogo src={CompleteLogoSticker} />
                        </Container>
                );
                window.Telegram.WebApp.MainButton.setParams({
                        text: "Go to main page",
                        color: '#4AB6ED',
                        is_active: true
                });
                window.Telegram.WebApp.MainButton.onClick(() => navigate('/'))
        } else {
                component = 
                        <Container>
                                <ProgressBar>
                                        <Progress width={((currentTaskIndex + 1) / TasksEN.length) * 100} />
                                </ProgressBar>

                                <Title>{TasksEN[currentTaskIndex].title}</Title>
                                <AnswerContainer>
                                        {TasksEN[currentTaskIndex].responses.map((response, index) => (
                                                <RadioLabel key={index}>
                                                        <div style={{ width: "20px", height: "20px", marginRight: "10px" }}>
                                                                {isResult && selectedAnswer === response ? (
                                                                        <ResultImage
                                                                                src={isCorrect ? Complete : Error}
                                                                                alt={isCorrect ? "Correct" : "Incorrect"}
                                                                        />
                                                                ) : (
                                                                        <SelectCircle />
                                                                )}
                                                        </div>
                                                        <RadioInput
                                                                type="radio"
                                                                name="answer"
                                                                value={response}
                                                                checked={selectedAnswer === response}
                                                                onChange={() => handleAnswerSelect(response)}
                                                                disabled={isResult}
                                                        />

                                                        {response}
                                                </RadioLabel>
                                        ))}
                                </AnswerContainer>
                        </Container>
        }*/

        return (
                <Container>
                        <ProgressBar>
                                <Progress width={((currentTaskIndex + 1) / TasksEN.length) * 100} />
                        </ProgressBar>

                        <Title>{TasksEN[currentTaskIndex].title}</Title>
                        <AnswerContainer>
                                {TasksEN[currentTaskIndex].responses.map((response, index) => (
                                        <RadioLabel key={index}>
                                                <div style={{ width: "20px", height: "20px", marginRight: "10px" }}>
                                                        {isResult && selectedAnswer === response ? (
                                                                <ResultImage
                                                                        src={isCorrect ? Complete : Error}
                                                                        alt={isCorrect ? "Correct" : "Incorrect"}
                                                                />
                                                        ) : (
                                                                <SelectCircle />
                                                        )}
                                                </div>
                                                <RadioInput
                                                        type="radio"
                                                        name="answer"
                                                        value={response}
                                                        checked={selectedAnswer === response}
                                                        onChange={() => handleAnswerSelect(response)}
                                                        disabled={isResult}
                                                />

                                                {response}
                                        </RadioLabel>
                                ))}
                        </AnswerContainer>
                </Container>
        );
};