import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {fetchInTheaters} from '../api';
import {Colors} from '../constants';
import Slider from './Slider';

export default function InTheatersSlider() {
	const [inTheaters, setInTheaters] = useState([]);
	useEffect(() => {
		// here is where you make API call(s) or any side effects
		fetchInTheaters((movieList: any) => {
			setInTheaters(movieList);
		});
	}, [setInTheaters]);

	const getSliderItems = () => {
		return inTheaters.map((item: any) => {
			const poster = <Poster src={item.image} alt={item.title} />;
			const detail = (
				<DetailWrapper>
					<Title>{item.fullTitle}</Title>
					<SmallLabel>{item.plot}</SmallLabel>
				</DetailWrapper>
			);
			return {
				poster,
				detail
			};
		});
	};

	return (
		<Wrapper>
			<Slider sliderItems={getSliderItems()} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 500px;
	padding: 2rem;
	justify-content: center;
`;

const DetailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	justify-content: center;
`;

const Poster = styled.img`
	display: flex;
	height: 100%;
`;

const Label = styled.div`
	display: flex;
	font-size: 12px;
`;

const Title = styled(Label)`
	font-size: 26px;
	color: ${Colors.white};
`;

const SmallLabel = styled(Label)`
	color: ${Colors.gray};
`;
