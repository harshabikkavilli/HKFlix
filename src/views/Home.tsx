import React from 'react';
import styled from 'styled-components';

function Home() {
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
