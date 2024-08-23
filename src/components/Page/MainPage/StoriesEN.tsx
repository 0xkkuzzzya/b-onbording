import styled from "styled-components";
import Stories from 'react-insta-stories';
import firstStories from '../../../assets/Stories/FirstStoriesEN.png'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CompleteTask } from "../../../api/user";
import { useUser } from "../../../store/useUsers";


export const StoriesPageEN = () => {

	const [currentIndex, setCurrentIndex] = useState(0);
	const navigate = useNavigate();
	const [user, setUser] = useUser()

	const stories = [
		{
			url: firstStories,
		},
		{
			url: "https://avatars.mds.yandex.net/i?id=2d29f4839ac021807aae0f05cdbf6231ddc92a2ab1848bbf-11540573-images-thumbs&n=13",
		},
	];

	useEffect(() => {
		window.Telegram.WebApp.BackButton.show()
		window.Telegram.WebApp.MainButton.hide()
		window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))
	}, [])

	return (
		<div style={{ overflow: "hidden" }}>
			<Stories
				stories={stories}
				currentIndex={currentIndex}
				onAllStoriesEnd={() => {
					CompleteTask(user.user_id, "task1")
					navigate(-1)
				}}
				width="100%"
				height="100vh"
			/>
		</div>
	);
} 