import React from 'react';
import styled from 'styled-components';
import {MovieCardConfig} from '../../../types';

export default function SliderItem({
	movie,
	width
}: {
	movie: MovieCardConfig;
	width: number;
}) {
	return (
		<SliderItemWrapper width={width}>
			<SliderImage src={movie.image} alt={movie.title} />
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
