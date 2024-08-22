import styled from "styled-components";
import Stories from 'react-insta-stories';
import firstStories from '../../../assets/Stories/FirstStoriesEN.png'
import { useEffect } from "react";
import { useNavigate } from "react-router";


export const StoriesPageEN = () => {

	const navigate = useNavigate();

	useEffect(() => {
		window.Telegram.WebApp.BackButton.show()
        window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))
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

	return (
		<Stories
			stories={stories}
			width="100%"
			height="100vh"
		/>
	);
} 