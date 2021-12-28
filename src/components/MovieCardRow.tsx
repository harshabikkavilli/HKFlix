import React from 'react';
import styled, {css, ThemeProvider} from 'styled-components';
import {getComingSoonList, getMostPopularMoviesList} from '../api';
import {useAsyncFunction} from '../api/useAsyncFunction';
import {Colors} from '../constants';
import {useResponsive} from '../providers/ResponsiveProvider';
import {MovieCardConfig, MovieCardRowTypes} from '../types';
import {SkeletonLine} from './common/SkeletonLoading';
import Slider from './common/slider/Slider';

type MovieCardRowProps = {
	type: MovieCardRowTypes;
};
export default function MovieCardRow(props: MovieCardRowProps) {
	const {type} = props;
	const {isBigScreen} = useResponsive()!;

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
		<ThemeProvider theme={{isBigScreen}}>
			<MovieCardRowWrapper>
				<Header>{getHeaderLabel()}</Header>
				<Slider nodes={movieCards} />
			</MovieCardRowWrapper>
		</ThemeProvider>
	);
}

const MovieCardRowWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;
const Header = styled.div`
	color: ${Colors.white};
	text-align: left;
	min-width: 6em;
	${(props) =>
		props.theme.isBigScreen
			? css`
					margin: 0 4% 0.5rem 4%;
					margin-left: 60px;
					font-size: 24px;
			  `
			: css`
					margin: 0 4% 0.25rem 4%;
					margin-left: 1rem;
					font-size: 14px;
			  `}
`;
