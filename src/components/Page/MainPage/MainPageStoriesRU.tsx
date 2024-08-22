import styled from "styled-components";
import Stories from 'react-insta-stories';
import firstStories from '../../../assets/Stories/FirstStoriesRU.png'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


export const StoriesPageRU = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        window.Telegram.WebApp.BackButton.show()
        window.Telegram.WebApp.MainButton.show()
        window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))
        window.Telegram.WebApp.MainButton.onClick(() => handleNext())
    }, [])

    const stories = [
        {
            url: firstStories,
            duration: 5000,
        },
        {
            url: "https://avatars.mds.yandex.net/i?id=2d29f4839ac021807aae0f05cdbf6231ddc92a2ab1848bbf-11540573-images-thumbs&n=13",
            duration: 5000,
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < stories.length - 1 ? prevIndex + 1 : prevIndex));
    };


    return (
        <Stories
            stories={stories}
            currentIndex={currentIndex}
            onStoryEnd={(index: number, story: any) => {
                if (index < stories.length - 1) {
                    setCurrentIndex(index + 1);
                }
            }}
            onAllStoriesEnd={() => navigate(-1)}
            width="100%"
            height="100vh"
        />
    );
} 