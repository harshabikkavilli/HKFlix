import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

type SliderItem = {
	poster: JSX.Element;
	detail?: JSX.Element;
};

type SliderProps = {
	sliderItems: SliderItem[];
};

export default function Slider({sliderItems}: SliderProps) {
	return (
		<CarouselWrapper fade controls={false}>
			{sliderItems.map(({poster, detail}, i) => {
				return (
					<CarouselItemWrapper key={i}>
						{poster}
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
	background-color: black;
	&.active {
		display: flex;
	}
`;

const CarouselCaptionWrapper = styled(Carousel.Caption)`
	flex-direction: column;
	height: 100%;

	&.active {
		display: flex;
	}

	&.carousel-caption {
		position: relative;
		top: 0;
		left: 0;
		padding: 0;
	}
`;
