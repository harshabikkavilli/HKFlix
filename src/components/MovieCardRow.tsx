import React from 'react';
import styled from 'styled-components';
import {getComingSoonList, getMostPopularMoviesList} from '../api';
import {useAsyncFunction} from '../api/useAsyncFunction';
import {Colors} from '../constants';
import {MovieCardConfig, MovieCardRowTypes} from '../types';
import {SkeletonLine} from './common/SkeletonLoading';
import Slider from './common/slider/Slider';

type MovieCardRowProps = {
	type: MovieCardRowTypes;
};
export default function MovieCardRow(props: MovieCardRowProps) {
	const {type} = props;

	const defaultFunction = async () => {
		return 'Unknown Category';
	};
	// here is where you make API call(s) or any side effects
	const getAsyncFunction = () => {
		switch (type) {
			case MovieCardRowTypes.COMING_SOON:
				return getComingSoonList;
			case MovieCardRowTypes.MOST_POPULAR_MOVIES:
				return getMostPopularMoviesList;
			default:
				return defaultFunction;
		}
	};

	const emptyList: MovieCardConfig[] = [];
	const [movieCards, error, isPending] = useAsyncFunction(
		getAsyncFunction(),
		emptyList
	);

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

	if (error) {
		return <pre>ERROR! {error}...</pre>;
	}
	if (isPending) {
		return SkeletonLine({translucent: true, height: '10%'});
	}

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
