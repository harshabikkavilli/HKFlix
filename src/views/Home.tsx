import React, {useEffect} from 'react';
import styled from 'styled-components';
import {fetchInTheaters} from '../api';

function Home() {
	useEffect(() => {
		// here is where you make API call(s) or any side effects
		fetchInTheaters();
	}, []);
	return <Wrapper>IMDB-Clone</Wrapper>;
}

export default Home;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
`;
