import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainIndex } from './components';
import { useGetGeoposition } from './components/store/geoposition';

const Container = styled.div`
	max-width: 100%;
`

interface User {
	language_code: string;
	country: string;
}

interface InitDataUnsafe {
	user?: User;
}


function App() {

	const [geoposition, setGeoposition] = useGetGeoposition()

	useEffect(() => {
		Telegram.WebApp.ready();

		const initDataUnsafe: InitDataUnsafe = Telegram.WebApp.initDataUnsafe as InitDataUnsafe;

		let countryCode = initDataUnsafe.user?.country || initDataUnsafe.user?.language_code;

		alert(countryCode)

		if(countryCode != undefined && countryCode != "") {
			setGeoposition({country: countryCode!})
		} else {
			setGeoposition({country: ""})
		}

	}, [])

	return (
		<Container>
			<MainIndex />
		</Container>
	);
}

export default App;
