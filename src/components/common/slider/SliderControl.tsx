import chevronLeft from '@iconify/icons-mdi/chevron-left';
import chevronRight from '@iconify/icons-mdi/chevron-right';
import {Icon} from '@iconify/react';
import React from 'react';
import styled, {css} from 'styled-components';

export default function SliderControl({
	arrowDirection,
	onClick
}: {
	arrowDirection: string;
	onClick: () => void;
}) {
	return (
		<SliderControlWrapper arrowDirection={arrowDirection}>
			<SliderControlArrow onClick={onClick}>
				<Icon icon={arrowDirection === 'right' ? chevronRight : chevronLeft} />
			</SliderControlArrow>
		</SliderControlWrapper>
	);
}

interface ISliderControlWrapper {
	arrowDirection: string;
}
export const SliderControlWrapper = styled.div<ISliderControlWrapper>`
	position: absolute;
	top: 0;
	height: 100%;
	width: 4%;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 3rem;
	cursor: pointer;
	color: #ffffff;
	z-index: 10;

	${(props) =>
		props.arrowDirection === 'right' &&
		css`
			right: 0;
		`}

	${(props) =>
		props.arrowDirection === 'left' &&
		css`
			left: 0;
		`}
`;

export const SliderControlArrow = styled.div`
	transition-duration: 0.4s;
	display: none;

	&:hover,
	&:active {
		transform: scale(1.3);
	}
`;
