import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {getIntheatersList} from '../api';
import {Colors} from '../constants';
import Slider from './Slider';

export default function InTheatersSlider() {
	const [inTheaters, setInTheaters] = useState([] as any);
	const fetchInTheaterItems = async () => {
		const movieList = await getIntheatersList();
		setInTheaters(movieList);
	};
	useEffect(() => {
		// here is where you make API call(s) or any side effects
		fetchInTheaterItems();
	}, []);

	const renderTtile = (item: any) => {
		return (
			<TitleWrapper>
				<Title>{item.title}</Title>
				<Caption>{item.plot}</Caption>
				<TitleDetails>
					<Label>{item.year}</Label>&ensp;
					{item.contentRating && (
						<RatingLabel>{item.contentRating}</RatingLabel>
					)}
					&ensp;<Label>{item.runtimeStr}</Label>
				</TitleDetails>
				<ReleasingInfo>{item.releaseState}</ReleasingInfo>
			</TitleWrapper>
		);
	};

	const renderDirectedBy = (item: any) => {
		return (
			<SectionWrapper>
				<SectionLabel>Directed By:</SectionLabel>
				{item.directorList.map(({id, name}: {id: string; name: string}) => {
					return <Section key={id}>{name}</Section>;
				})}
			</SectionWrapper>
		);
	};

	const renderCast = (item: any) => {
		return (
			<SectionWrapper>
				<SectionLabel>Cast:</SectionLabel>
				{item.starList.map(({id, name}: {id: string; name: string}) => {
					return <Section key={id}>{name}</Section>;
				})}
			</SectionWrapper>
		);
	};

	const renderGenres = (item: any) => {
		return (
			<SectionWrapper>
				<SectionLabel>Genres:</SectionLabel>
				{item.genreList.map(({value}: {value: string}, i: number) => {
					return <Section key={i}>{value}</Section>;
				})}
			</SectionWrapper>
		);
	};

	const getSliderItems = () => {
		return inTheaters.map((item: any) => {
			const poster = <Poster src={item.imageSrc}></Poster>;
			const detail = (
				<DetailWrapper>
					{renderTtile(item)}
					{renderDirectedBy(item)}
					{renderCast(item)}
					{renderGenres(item)}
				</DetailWrapper>
			);
			return {
				node: poster,
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
	justify-content: center;
`;

const DetailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	justify-content: center;
`;

interface IPoster {
	src: string;
}

const Poster = styled.div<IPoster>`
	background-image: linear-gradient(
			to right,
			rgba(255, 255, 255, 0),
			rgba(0, 0, 0, 0.8)
		),
		url(${(props) => props.src});
	width: 100%;
	height: 100%;
	background-size: cover;

	/* display: flex;
	height: 100%;
	object-fit: cover;
	width: 100%; */
`;

const Label = styled.div`
	display: flex;
	font-size: 13px;
	color: ${Colors.white};
`;

const RatingLabel = styled(Label)`
	border: solid 1px;
	padding: 0px 2px;
	font-size: 11px;
`;

const Title = styled(Label)`
	font-size: 36px;
`;

const Caption = styled(Label)`
	font-size: 15px;
	margin-top: 0.5rem;
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 0.5rem;
`;

const TitleDetails = styled.div`
	display: flex;
	font-size: 13px;
	color: ${Colors.white};
	margin-top: 0.5rem;
`;

const ReleasingInfo = styled(Label)`
	margin-top: 0.25rem;
	&:not(:last-child):after {
		content: ',';
	}
`;

const SectionWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 0.5rem;
`;

const SectionLabel = styled(Label)`
	margin-right: 0.5rem;
`;

const Section = styled(Label)`
	color: ${Colors.blue};
	margin-right: 0.25rem;
	&:not(:last-child):after {
		content: ',';
	}
`;
