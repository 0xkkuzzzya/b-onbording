import styled from "styled-components";
import { useState, useEffect } from "react";
import { TasksRU, useAllTasksComplete } from "../../../store/useTasks";
import { useNavigate } from "react-router-dom";
import Complete from "../../../assets/Complete.webp";
import Error from "../../../assets/Error.webp";
import { useUser } from "../../../store/useUsers";
import { CompleteTask } from "../../../api/user";


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
        width: 90%;
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

export const TasksPageRU = () => {
        const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
        const [selectedAnswer, setSelectedAnswer] = useState("");
        const [isResult, setIsResult] = useState(false);
        const [isCorrect, setIsCorrect] = useState(false);
        const navigate = useNavigate();
        const [allTasksComplete, setAllTasksComplete] = useAllTasksComplete();
        const [user, setUser] = useUser()
        const [pbc, setPBC] = useState("#4AB6ED")

        const completeTask = () => {
                if(allTasksComplete.amount == TasksRU.length - 1) {
                        console.log("Complete task 2")
                        CompleteTask(user.user_id, "task2")
                }
                setCurrentTaskIndex(0);
                navigate("/")
        }

        useEffect(() => {
                window.Telegram.WebApp.BackButton.show()
                window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))

                window.Telegram.WebApp.MainButton.hide()
        }, []);

        useEffect(() => {
                if (selectedAnswer != "" && currentTaskIndex < TasksRU.length - 1) {
                        window.Telegram.WebApp.MainButton.onClick(handleNextQuestion)
                        return () => {
                                window.Telegram.WebApp.MainButton.offClick(handleNextQuestion);
                        } 
                } else if (selectedAnswer != "" && currentTaskIndex >= TasksRU.length - 1) {
                        window.Telegram.WebApp.MainButton.onClick(completeTask)
                        return () => {
                                window.Telegram.WebApp.MainButton.offClick(completeTask);
                        }
                } else if (selectedAnswer == "") {
                        window.Telegram.WebApp.MainButton.hide()
                }
        }, [selectedAnswer, currentTaskIndex]);
    
        const handleAnswerSelect = (answer: string) => {
                setIsResult(true);
                setSelectedAnswer(answer);
                setIsCorrect(TasksRU[currentTaskIndex].correctAnswer === answer);

                if (TasksRU[currentTaskIndex].correctAnswer === answer) {
                        setAllTasksComplete({amount: allTasksComplete.amount + 1});
                } else {
                        setPBC("#ff081d")
                }

                window.Telegram.WebApp.MainButton.show()

                if (currentTaskIndex >= TasksRU.length - 1) {
                        window.Telegram.WebApp.MainButton.setParams({
                                text: "Завершить",
                                color: '#4AB6ED',
                        });
                } else {
                        window.Telegram.WebApp.MainButton.setParams({
                                text: "Следующий вопрос",
                                color: '#4AB6ED',
                        });
                }
        }

        const handleNextQuestion = () => {
                setCurrentTaskIndex(currentTaskIndex + 1);
                setSelectedAnswer("");
                setIsCorrect(false);
                setIsResult(false);
        }

        return (
                <Container>
                        <ProgressBar>
                                <Progress width={((currentTaskIndex) / TasksRU.length) * 100} color={pbc} />
                        </ProgressBar>

                <Title>{TasksRU[currentTaskIndex].title}</Title>
                <AnswerContainer>
                        {TasksRU[currentTaskIndex].responses.map((response, index) => (
                                <RadioLabel key={index}>
                                        <div style={{width: "20px", height: "20px", marginRight: "10px"}}>
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