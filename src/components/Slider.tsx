import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

type SliderItem = {
	node: JSX.Element;
	detail?: JSX.Element;
};

type SliderProps = {
	sliderItems: SliderItem[];
};

export default function Slider({sliderItems}: SliderProps) {
	return (
		<CarouselWrapper pause="hover" fade controls={false}>
			{sliderItems.map(({node, detail}, i) => {
				return (
					<CarouselItemWrapper key={i}>
						<Overlay></Overlay>
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

const Overlay = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 99;
	background-image: linear-gradient(to right, rgb(0 0 0 / 0%), rgb(68 66 66));
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
