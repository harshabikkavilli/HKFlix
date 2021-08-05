import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

type CarouselSliderItem = {
	node: JSX.Element;
	detail?: JSX.Element;
};

type CarouselSliderProps = {
	carouselSliderItems: CarouselSliderItem[];
};

export default function CarouselSlider({
	carouselSliderItems
}: CarouselSliderProps) {
	return (
		<CarouselWrapper pause="hover" fade controls={false} indicators={false}>
			{carouselSliderItems.map(({node, detail}, i) => {
				return (
					<CarouselItemWrapper key={i}>
						{node}
						<CarouselCaptionWrapper>{detail}</CarouselCaptionWrapper>
					</CarouselItemWrapper>
				);
			})}
		</CarouselWrapper>
	);
}

const CarouselWrapper = styled(Carousel)`
	display: flex;
	height: 100%;
`;

const CarouselItemWrapper = styled(Carousel.Item)`
	height: 100%;
	position: relative;
	background-color: black;
	&.active {
		width: 100%;
	}
`;

const CarouselCaptionWrapper = styled(Carousel.Caption)`
	flex-direction: column;
	height: 100%;

	&.carousel-caption {
		display: flex;
		justify-content: center;
		position: absolute;
		top: 0;
		right: 0;
		left: 60%;
		padding: 0;
		text-align: left;
		max-width: 40%;
		z-index: 100;
	}
`;
