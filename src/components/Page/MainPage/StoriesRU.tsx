import styled from "styled-components";
import Stories from 'react-insta-stories';
import Stories1 from '../../../assets/Stories/StoriesRU1.jpg'
import Stories2 from '../../../assets/Stories/StoriesRU2.jpg'
import Stories3 from '../../../assets/Stories/StoriesRU3.jpg'
import Stories4 from '../../../assets/Stories/StoriesRU4.jpg'
import Stories5 from '../../../assets/Stories/Stories5RU.jpg'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CompleteTask } from "../../../api/user";
import { useUser } from "../../../store/useUsers";


export const StoriesPageRU = () => {

	const [currentIndex, setCurrentIndex] = useState(0);
	const navigate = useNavigate();
	const [user, setUser] = useUser()

	const stories = [
		{
			url: Stories1,
		},
		{
			url: Stories2,
		},
		{
			url: Stories3,
		},
		{
			url: Stories4,
		},
		{
			url: Stories5,
		},
	];

	useEffect(() => {
		window.Telegram.WebApp.BackButton.show()
		window.Telegram.WebApp.MainButton.hide()
		window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))
	}, [])


	return (
		<div style={{ overflow: "hidden", width: "100%", height: "100vh" }}>
			<Stories
				stories={stories}
				currentIndex={currentIndex}
				onAllStoriesEnd={() => {
					CompleteTask(user.user_id, "task1")
					navigate(-1)}}
				width="100%"
				height="100vh"
			/>
		</div>
	);
} 