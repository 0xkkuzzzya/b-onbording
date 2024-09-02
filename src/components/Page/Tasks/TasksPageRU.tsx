import styled from "styled-components";
import { useState, useCallback, useEffect } from "react";
import { Task, TasksRU } from "../../../store/useTasks";
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
    font-weight: 600;
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



export const TasksPageRU = () => {
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [checkedAnswers, setCheckedAnswers] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTasks(TasksRU);

        window.Telegram.WebApp.BackButton.show()
        window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))

        window.Telegram.WebApp.MainButton.show()
        window.Telegram.WebApp.MainButton.setParams({
            text: "Выберите правильный ответ",
            color: '#2A2A2A',
            is_active: false
        });

        if (currentTaskIndex >= tasks.length) {
            window.Telegram.WebApp.MainButton.onClick(() => navigate('/'))
            window.Telegram.WebApp.MainButton.setParams({
                text: "Вернуться на главную",
                color: '#4AB6ED',
                is_active: true
            });
        } 

        if (isCorrect) {
            window.Telegram.WebApp.MainButton.onClick(handleNextQuestion)
            window.Telegram.WebApp.MainButton.setParams({
                text: "Следующий вопрос 5",
                color: '#4AB6ED',
                is_active: true
            });
        }
    }, [isCorrect, selectedAnswer, currentTaskIndex, tasks.length]);

    const handleAnswerSelect = (response: string) => {
        if (isCorrect) return;

        setSelectedAnswer(response);
        if (!checkedAnswers.includes(response)) {
            setCheckedAnswers(prev => [...prev, response]);
        }

        if (tasks[currentTaskIndex]?.correctAnswer === response) {
            setIsCorrect(true);
        }
    };

    const handleNextQuestion = () => {
        setCurrentTaskIndex(prevIndex => prevIndex + 1);
        setSelectedAnswer("");
        setCheckedAnswers([]);
        setIsCorrect(false);

        window.Telegram.WebApp.MainButton.setParams({
            text: "Выберите правильный ответ",
            color: '#2A2A2A',
            is_active: false
        });
    };
    
    console.log(tasks.length)

    if (currentTaskIndex >= tasks.length) {
        return (
            <Container>
                <Title>Все задания выполнены!</Title>
                <CompleteLogo src={CompleteLogoSticker} />
            </Container>
        );
    }

    const currentTask = tasks[currentTaskIndex];

    const progress = ((currentTaskIndex + 1) / tasks.length) * 100;

    return (
        <Container>
            <ProgressBar>
                <Progress width={progress} />
            </ProgressBar>
            <Title>{currentTask.title}</Title>
            <AnswerContainer>
                {currentTask.responses.map((response, index) => (
                    <RadioLabel key={index}>
                        <div style={{width: "20px", height: "20px", marginRight: "10px"}}>
                            {checkedAnswers.includes(response) ? (
                                response === currentTask.correctAnswer ? (
                                    <ResultImage src={Complete} />
                                ) : (
                                    <ResultImage src={Error} />
                                )
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
                            disabled={isCorrect}
                        />

                        {response}
                    </RadioLabel>
                ))}
            </AnswerContainer>
        </Container>
    );
};