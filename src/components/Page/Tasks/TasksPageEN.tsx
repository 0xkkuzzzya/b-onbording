import styled from "styled-components";
import { useState, useCallback, useEffect } from "react";
import { Task, TasksEN, useAllTasksComplete } from "../../../store/useTasks";
import { Link, useNavigate } from "react-router-dom";
import Complete from "../../../assets/Complete.webp";
import Error from "../../../assets/Error.webp";
import CompleteLogoSticker from "../../../assets/CompleteTasks.webp";
import { CompleteTask } from "../../../api/user";
import { useUser } from "../../../store/useUsers";

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

const Progress = styled.div<{ width: number, color: string }>`
    width: ${props => props.width}%;
    height: 100%;
    background-color: ${props => props.color};
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
        const [allTasksComplete, setAllTasksComplete] = useAllTasksComplete();
        const [user, setUser] = useUser()

        let component;

        useEffect(() => {
                window.Telegram.WebApp.BackButton.show()
                window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))
                window.Telegram.WebApp.MainButton.hide()
        }, []);

        useEffect(() => {
                if (selectedAnswer != "") {
                        window.Telegram.WebApp.MainButton.onClick(handleNextQuestion)
                } else {
                        window.Telegram.WebApp.MainButton.hide()
                }
        }, [selectedAnswer]);

        useEffect(() => {
                if (currentTaskIndex == TasksEN.length - 1) {
                        window.Telegram.WebApp.BackButton.onClick(() => {
                                if(allTasksComplete.amount == TasksEN.length) {
                                        console.log("Complete task 2")
                                        CompleteTask(user.user_id, "task2")
                                }
                                navigate(-1)
                        })
                }
        }, [currentTaskIndex]);

        const handleAnswerSelect = (answer: string) => {
                setIsResult(true);
                setSelectedAnswer(answer);
                setIsCorrect(TasksEN[currentTaskIndex].correctAnswer === answer);
                if (TasksEN[currentTaskIndex].correctAnswer === answer) {
                        setAllTasksComplete({amount: allTasksComplete.amount + 1});
                }
                window.Telegram.WebApp.MainButton.show()

                if (currentTaskIndex == TasksEN.length - 1) {
                        window.Telegram.WebApp.MainButton.setParams({
                                text: "Complete",
                                color: '#4AB6ED',
                        });
                } else {
                        window.Telegram.WebApp.MainButton.setParams({
                                text: "Next question",
                                color: '#4AB6ED',
                        });
                }
        }

        const handleNextQuestion = () => {
                setCurrentTaskIndex(prevIndex => prevIndex + 1);
                setSelectedAnswer("");
                setIsCorrect(false);
                setIsResult(false);
        }

        console.log(TasksEN.length - currentTaskIndex)
        console.log(TasksEN.length - allTasksComplete.amount)

        return (
                <Container>
                        <ProgressBar>
                                <Progress width={((currentTaskIndex) / TasksEN.length) * 100} color={TasksEN.length - currentTaskIndex == TasksEN.length - allTasksComplete.amount ? "#4AB6ED" : "#ff081d"} />
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