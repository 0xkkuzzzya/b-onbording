import styled from "styled-components";
import { useState, useCallback, useEffect } from "react";
import { Task, Tasks } from "../../../store/useTasks";
import Complete from "../../../assets/Complete.webp";
import Error from "../../../assets/Error.webp";

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    margin: 10px 0;
    cursor: pointer;
    color: #fff;
`

const RadioInput = styled.input`
    display: none;
    margin-right: 10px;
`

const ResultImage = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
`

export const TasksPageEN = () => {
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [checkedAnswer, setCheckedAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const handleCheckAnswer = useCallback(() => {
        if (!selectedAnswer) {
            alert("Пожалуйста, выберите ответ");
            return;
        }

        setCheckedAnswer(selectedAnswer);
        const correct = selectedAnswer === tasks[currentTaskIndex]?.correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            setTimeout(() => {
                setCurrentTaskIndex(prevIndex => prevIndex + 1);
                setSelectedAnswer("");
                setCheckedAnswer("");
                setIsCorrect(false);
            }, 1500); 
        } else {
            setSelectedAnswer("");
        }
    }, [selectedAnswer, currentTaskIndex, tasks]);

    useEffect(() => {
        setTasks(Tasks);
        
        const mainButton = window.Telegram.WebApp.MainButton;
        mainButton.setText("Проверить ответ");
        mainButton.show();
        mainButton.onClick(handleCheckAnswer);

        return () => {
            mainButton.offClick(handleCheckAnswer);
            mainButton.hide();
        };
    }, [handleCheckAnswer]);

    if (tasks.length === 0 || currentTaskIndex >= tasks.length) {
        return <Container>Все задания выполнены!</Container>;
    }

    const currentTask = tasks[currentTaskIndex];

    return (
        <Container>
            <h2>{currentTask.title}</h2>
            {currentTask.responses.map((response, index) => (
                <RadioLabel key={index}>
                    {checkedAnswer === response && (
                        <ResultImage 
                            src={response === currentTask.correctAnswer ? Complete : Error} 
                        />
                    )}
                    <RadioInput 
                        type="radio" 
                        name="answer" 
                        value={response}
                        checked={selectedAnswer === response}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        disabled={isCorrect}
                    />
                    {response}
                </RadioLabel>
            ))}
        </Container>
    );
}