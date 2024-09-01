import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Task, Tasks } from "../../../store/useTasks";
import Complete from "../../../assets/Complete.webp";
import Error from "../../../assets/Error.webp";

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const RadioLabel = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    cursor: pointer;
    font-size: 14px;
    line-height: 2;
    white-space: nowrap;
`

const Block = styled.label`
    display: flex;
    align-items: center;
`

const RadioBlock = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #333;
`

const Img = styled.img`
    width: 20px;
    height: 20px;
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
                <Block>
                    <RadioBlock />
                    <RadioLabel
                        key={index}
                        onClick={(e) => setSelectedAnswer(response)}
                        style={{ color: isCorrect }}
                    >
                        {response}
                    </RadioLabel>
                </Block>
            ))}
        </Container>
    );
}