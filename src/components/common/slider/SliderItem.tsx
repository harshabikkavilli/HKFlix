import React from 'react';
import styled from 'styled-components';
import {MovieCardConfig} from '../../../types';
import {THUMBNAIL_URL} from '../../../constants';

export default function SliderItem({
	movie,
	width
}: {
	movie: MovieCardConfig;
	width: number;
}) {
	const posterPath = `${THUMBNAIL_URL}${movie.poster_path}`;
	return (
		<SliderItemWrapper width={width}>
			<SliderImage src={posterPath} alt={movie.title} />
		</SliderItemWrapper>
	);
}

interface IWrapper {
	width: number;
}
export const SliderItemWrapper = styled.div<IWrapper>`
	width: ${(props) => `${props.width}%`};
	padding: 0 4px;
	display: inline-block;

	&:first-of-type {
		padding-left: 0;
	}

	&:last-of-type {
		padding-right: 0;
	}

	img {
		display: block;
		width: 100%;
		max-width: 100%;
	}
`;

const SliderImage = styled.img`
	width: 100%;
	height: 100%;
`;
