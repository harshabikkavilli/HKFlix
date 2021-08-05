import React from 'react';
import styled from 'styled-components';
import InTheatersSlider from '../components/InTheatersSlider';
import MovieCardRow from '../components/MovieCardRow';
import {MovieCardRowTypes} from '../types';

export default function Home() {
	return (
		<Wrapper>
			<InTheatersSlider />
			<MovieCardRowContianer>
				<MovieCardRow type={MovieCardRowTypes.COMING_SOON} />
				<MovieCardRow type={MovieCardRowTypes.MOST_POPULAR_MOVIES} />
			</MovieCardRowContianer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: flex-start;
	position: relative;
`;

const MovieCardRowContianer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40%;
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
`;
