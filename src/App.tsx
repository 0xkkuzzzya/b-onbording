import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainIndex } from './components';
import { useGeoposition } from './store/useGeoposition';
import { InitDataUnsafe } from './type/tg_type';

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

	useEffect(() => {
		Telegram.WebApp.ready();

		const initDataUnsafe: InitDataUnsafe = Telegram.WebApp.initDataUnsafe as InitDataUnsafe;

		let countryCode = initDataUnsafe.user?.country || initDataUnsafe.user?.language_code;

		if (countryCode != undefined && countryCode != "") {
			setGeoposition({ country: countryCode! })
		} else {
			setGeoposition({ country: "" })
		}
	}, [])


	return (

		
		<Container>
			<MainIndex />
		</Container>
	);
}

export default App;
