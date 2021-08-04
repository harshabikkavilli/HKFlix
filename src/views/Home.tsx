import React from 'react';
import styled from 'styled-components';
import InTheatersSlider from '../components/InTheatersSlider';
import MovieCardRow from '../components/MovieCardRow';
import {MovieCardRowTypes} from '../types';

export default function Home() {
	return (
		<Wrapper>
			<InTheatersSlider />
			<MovieCardRow type={MovieCardRowTypes.COMING_SOON} />
			<MovieCardRow type={MovieCardRowTypes.MOST_POPULAR_MOVIES} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: flex-start;
`;
