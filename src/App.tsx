import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainIndex } from './components';
import { useGeoposition } from './store/useGeoposition';
import { InitDataUnsafe } from './type/tg_type';
import { GetUser, GetWaitlistUserCheck } from './api/user';
import { useUser, useWaitlistUser } from './store/useUsers';

const Container = styled.div`
	max-width: 100%;
	height: var(--tg-viewport-stable-height);
	overflow-y: auto;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`


function App() {

	const [geoposition, setGeoposition] = useGeoposition()
	const [user, setUser] = useUser()
	const [waitlistExist, setWaitlistUser] = useWaitlistUser()

	async function main(user_id: string) {
		let user = await GetUser(user_id)
		setUser(user)

		let exist = await GetWaitlistUserCheck(user_id)
		setWaitlistUser({exist})
	}

	useEffect(() => {
		Telegram.WebApp.ready();

		const initDataUnsafe: InitDataUnsafe = Telegram.WebApp.initDataUnsafe as InitDataUnsafe;

		let countryCode = initDataUnsafe.user?.country || initDataUnsafe.user?.language_code;

		if (countryCode != undefined && countryCode != "") {
			setGeoposition({ country: countryCode! })
		} else {
			setGeoposition({ country: "" })
		}
		main((initDataUnsafe.user?.id)?.toString()!)
	}, [])

	useEffect(() => {
		Telegram.WebApp.ready();
		const initDataUnsafe: InitDataUnsafe = Telegram.WebApp.initDataUnsafe as InitDataUnsafe;
		var t = setInterval(() => {main((initDataUnsafe.user?.id)?.toString()!)}, 15000);
	}, [])

	return (
		<Container>
			<MainIndex />
		</Container>
	);
}

export default App;
