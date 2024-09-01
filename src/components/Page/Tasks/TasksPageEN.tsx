import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Task, Tasks } from "../../../store/useTasks";

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const RadioLabel = styled.label`
    display: block;
    margin: 10px 0;
    cursor: pointer;
    font-size: 15px;
    line-height: 2;
`

const RadioInput = styled.input`
    display: none;
`

export const TasksPageEN = () => {
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState("white");

    const handleNextQuestion = useCallback(() => {
        if (selectedAnswer === tasks[currentTaskIndex]?.correctAnswer) {
            setCurrentTaskIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer("");
            setIsCorrect("green");
        } else {
            setIsCorrect("red");
        }
    }, [selectedAnswer, currentTaskIndex, tasks]);

    useEffect(() => {
        setTasks(Tasks);
        
        const mainButton = window.Telegram.WebApp.MainButton;
        mainButton.setText("Следующий вопрос");
        mainButton.show();
        mainButton.onClick(handleNextQuestion);

        return () => {
            mainButton.offClick(handleNextQuestion);
            mainButton.hide();
        };
    }, [handleNextQuestion]);

    if (tasks.length === 0 || currentTaskIndex >= tasks.length) {
        return <Container>Все задания выполнены!</Container>;
    }

    const currentTask = tasks[currentTaskIndex];

    return (
        <Container>
            <h2>{currentTask.title}</h2>
            {currentTask.responses.map((response, index) => (
                <RadioLabel key={index} style={{color: isCorrect}}>
                    <RadioInput 
                        type="radio" 
                        name="answer" 
                        value={response}
                        checked={selectedAnswer === response}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                    />
                    {response}
                </RadioLabel>
            ))}
        </Container>
    );
}