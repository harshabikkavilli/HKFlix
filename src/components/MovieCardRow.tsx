import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {getComingSoonList} from '../api';
import {Colors} from '../constants';
import {MovieCardConfig, MovieCardRowTypes} from '../types';
import Slider from './common/slider/Slider';

type MovieCardRowProps = {
	type: MovieCardRowTypes;
};
export default function MovieCardRow(props: MovieCardRowProps) {
	const {type} = props;
	const [movieCards, setMovieCards] = useState([] as MovieCardConfig[]);

	const fetchMovieCards = async () => {
		const comingSoonList: MovieCardConfig[] = await getComingSoonList();
		setMovieCards(comingSoonList);
	};

	useEffect(() => {
		// here is where you make API call(s) or any side effects
		fetchMovieCards();
	}, []);

	const getHeaderLabel = () => {
		switch (type) {
			case MovieCardRowTypes.COMING_SOON:
				return 'Coming Soon';
			case MovieCardRowTypes.MOST_POPULAR_MOVIES:
				return 'Popular Movies';
			default:
				return '';
		}
	};

	return (
		<MovieCardRowWrapper>
			<Header>{getHeaderLabel()}</Header>
			<Slider nodes={movieCards} />
		</MovieCardRowWrapper>
	);
}

const MovieCardRowWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;
const Header = styled.h2`
	color: ${Colors.white};
	text-align: left;
	margin: 0 4% 0.5em 4%;
	margin-left: 60px;
	min-width: 6em;
`;
