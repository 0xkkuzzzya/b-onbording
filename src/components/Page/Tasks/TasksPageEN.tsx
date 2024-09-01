import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { Task, Tasks } from "../../../store/useTasks";
import { Link } from "react-router-dom";
import Complite from "../../../assets/images/complite.webp";
import Error from "../../../assets/images/Error.webp";

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    margin: 10px 0;
    cursor: pointer;
`

const RadioInput = styled.input`
    display: none;
`

const CustomRadio = styled.span<{ checked: boolean }>`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background-image: url(${props => props.checked ? Complite : Error});
    background-size: cover;
    display: inline-block;
`

export const TasksPageEN = () => {
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleNextQuestion = useCallback(() => {
        if (selectedAnswer === tasks[currentTaskIndex]?.correctAnswer) {
            setCurrentTaskIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer("");
            window.Telegram.WebApp.MainButton.setText("Next question");
        } else {
            alert("Incorrect answer. Try again.");
        }
    }, [selectedAnswer, currentTaskIndex, tasks]);

    useEffect(() => {
        setTasks(Tasks);
        
        const mainButton = window.Telegram.WebApp.MainButton;
        mainButton.setText("Select the correct answer");
        mainButton.show();
        mainButton.onClick(handleNextQuestion);

        return () => {
            mainButton.offClick(handleNextQuestion);
            mainButton.hide();
        };
    }, [handleNextQuestion]);

    if (tasks.length === 0 || currentTaskIndex >= tasks.length) {
        return <Container>
            All tasks completed!
            <Link to="/">
                <button>Go to the main page</button>
            </Link>
        </Container>;
    }

    const currentTask = tasks[currentTaskIndex];

    return (
        <Container>
            <h2>{currentTask.title}</h2>
            {currentTask.responses.map((response, index) => (
                <RadioLabel key={index}>
                    <RadioInput 
                        type="radio" 
                        name="answer" 
                        value={response}
                        checked={selectedAnswer === response}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                    />
                    <CustomRadio checked={selectedAnswer === response} />
                    {response}
                </RadioLabel>
            ))}
        </Container>
    );
}