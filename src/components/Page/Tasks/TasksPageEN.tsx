import styled from "styled-components";
import { useState, useCallback, useEffect } from "react";
import { Task, Tasks } from "../../../store/useTasks";
import Complete from "../../../assets/Complete.webp";
import Error from "../../../assets/Error.webp";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 90%;
    height: 100%;
    
`

const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
`

const RadioInput = styled.input`
    display: none;
    margin-right: 10px;
`

const ResultImage = styled.img`
    width: 17px;
    height: 17px;
    margin: 0px 5px;
`

const SelectCircle = styled.div`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 1px solid #333;
    margin-right: 5px;
`

export const TasksPageEN = () => {
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [checkedAnswer, setCheckedAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const handleCheckAnswer = useCallback(() => {
        if (!selectedAnswer) {
            alert("Please, choose answer");
        }

        if (selectedAnswer === tasks[currentTaskIndex]?.correctAnswer) {
            setTimeout(() => {
                setCurrentTaskIndex(prevIndex => prevIndex + 1);
                setSelectedAnswer("");
                setCheckedAnswer("");
                setIsCorrect(true);
                window.Telegram.WebApp.MainButton.setText("Next question");
            }, 1500);
        } else {
            setSelectedAnswer("");
        }
    }, [selectedAnswer, currentTaskIndex, tasks]);

    useEffect(() => {
        setTasks(Tasks);

        const mainButton = window.Telegram.WebApp.MainButton;
        mainButton.setText("Check answer");
        mainButton.show();
        mainButton.onClick(() => handleCheckAnswer);

        return () => {
            mainButton.offClick(handleCheckAnswer);
            mainButton.hide();
        };
    }, [handleCheckAnswer]);

    if (tasks.length === 0 || currentTaskIndex >= tasks.length) {
        return (
            <Container>
                All tasks completed!
                <Link to="/">Go to main page</Link>
            </Container>
        );
    }

    const currentTask = tasks[currentTaskIndex];

    return (
        <Container>
            <h2>{currentTask.title}</h2>
            {currentTask.responses.map((response, index) => (
                <RadioLabel key={index}>
                    {selectedAnswer == "" ? (
                        <SelectCircle />
                    ) : selectedAnswer === response ? (
                        isCorrect ? (
                            <ResultImage src={Complete} />
                        ) : (
                            <ResultImage src={Error} />
                        )
                    ) : (
                        <SelectCircle />
                    )}
                    <RadioInput
                        type="radio"
                        name="answer"
                        value={response}
                        checked={selectedAnswer === response}
                        onChange={() => setSelectedAnswer(response)}
                    />
                    {response}
                </RadioLabel>
            ))}
        </Container>
    );
}