import React from 'react';
import styled from 'styled-components';
import { MainIndex } from './components';

const Container = styled.div`
	max-width: 100%;
`


function App() {
	return (
		<Container>
			<MainIndex />
		</Container>
	);
}

export default App;
