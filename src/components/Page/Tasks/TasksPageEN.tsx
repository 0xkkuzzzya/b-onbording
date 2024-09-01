import styled from "styled-components";
import { useState, useCallback, useEffect } from "react";
import { Task, Tasks } from "../../../store/useTasks";
import { Link, useNavigate } from "react-router-dom";
import Complete from "../../../assets/Complete.webp";
import Error from "../../../assets/Error.webp";

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
export const TasksPageEN = () => {
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [checkedAnswers, setCheckedAnswers] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTasks(Tasks);

        window.Telegram.WebApp.BackButton.show()
		window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))

        window.Telegram.WebApp.MainButton.show()
        window.Telegram.WebApp.MainButton.onClick(handleNextQuestion)
        window.Telegram.WebApp.MainButton.setParams({
            color: '#2A2A2A',
            is_active: false,
        });
        window.Telegram.WebApp.MainButton.setText("Next question")
    }, []);

    useEffect(() => {
        if(isCorrect){
            window.Telegram.WebApp.MainButton.setParams({
                color: '#3A91C1',
                is_active: true,
            });
        }
    }, [isCorrect]);

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
            color: '#2A2A2A',
            is_active: false,
        });
    };

    if (tasks.length === 0 || currentTaskIndex >= tasks.length) {
        return (
            <Container>
                <Title>All tasks completed!</Title>
                <Link to="/">
                    <NextButton>Go to main page</NextButton>
                </Link>
            </Container>
        );
    }

    const currentTask = tasks[currentTaskIndex];

    if (!currentTask) {
        return <Container>Loading...</Container>;
    }

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
                        {checkedAnswers.includes(response) ? (
                            response === currentTask.correctAnswer ? (
                                <ResultImage src={Complete} alt="Correct" />
                            ) : (
                                <ResultImage src={Error} alt="Incorrect" />
                            )
                        ) : (
                            <SelectCircle />
                        )}
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