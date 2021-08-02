import React from 'react';
import styled from 'styled-components';
import InTheatersSlider from '../components/InTheatersSlider';

export default function Home() {
	return (
		<Wrapper>
			<InTheatersSlider />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
`;
