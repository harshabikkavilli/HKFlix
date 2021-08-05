import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {getIntheatersList} from '../api';
import {ReactComponent as PlayVideo} from '../assets/playVideo.svg';
import {Colors, genres, THUMBNAIL_URL} from '../constants';
import {useModals} from '../providers/ModalsProvider';
import {ModalBase, ModalTypes} from '../types';
import CarouselSlider from './CarouselSlider';
import Button, {StyledButton} from './common/Button';

export default function InTheatersSlider() {
	const [inTheaters, setInTheaters] = useState([] as any);
	const {addModal} = useModals()!;

	const fetchInTheaterItems = async () => {
		const movieList = await getIntheatersList();
		setInTheaters(movieList);
	};

	useEffect(() => {
		// here is where you make API call(s) or any side effects
		fetchInTheaterItems();
	}, []);

	const renderTtile = (item: any) => {
		const event = new Date(item.release_date);
		const options = {year: 'numeric', month: 'long', day: 'numeric'} as const;
		const releaseDate = event.toLocaleDateString(undefined, options);
		return (
			<TitleWrapper>
				<Title>{item.title}</Title>
				<Caption>{item.overview}</Caption>
				{/* <TitleDetails>
					<Label>{item.year}</Label>&ensp;
					{item.contentRating && (
						<RatingLabel>{item.contentRating}</RatingLabel>
					)}
					&ensp;<Label>{item.runtimeStr}</Label>
				</TitleDetails> */}
				<ReleasingInfo>Release Date: {releaseDate}</ReleasingInfo>
			</TitleWrapper>
		);
	};

	const renderGenres = (item: any) => {
		return (
			<SectionWrapper>
				<SectionLabel>Genres:</SectionLabel>
				{item.genre_ids.map((id: number, i: number) => {
					const genre = genres.find((o) => o.id === id);
					if (genre) return <Section key={i}>{genre.name}</Section>;
					return null;
				})}
			</SectionWrapper>
		);
	};

	function showTrailerVideoModal({
		title,
		trailerLink
	}: {
		title: string;
		trailerLink: string;
	}) {
		const modal: ModalBase = {
			type: ModalTypes.PlayVideo,
			props: {
				title: `${title} - Trailer`,
				otherProps: {
					videoLink: trailerLink
				}
			}
		};
		addModal(modal);
	}

	const renderActions = (item: any) => {
		if (item.trailerLink)
			return (
				<PlayTrailerButton>
					<Button
						variant="light"
						noText
						onClick={() =>
							showTrailerVideoModal({
								title: item.title,
								trailerLink: item.trailerLink
							})
						}>
						<>
							<StyledPlayVideo />
							&ensp;Play Trailer
						</>
					</Button>
				</PlayTrailerButton>
			);
	};

	const getCarouselSliderItems = () => {
		return inTheaters.map((item: any) => {
			const backdropPath = `${THUMBNAIL_URL}${item.backdrop_path}`;
			const heroImage = <Poster src={backdropPath}></Poster>;
			const detail = (
				<DetailWrapper>
					{renderTtile(item)}
					{renderGenres(item)}
					{renderActions(item)}
				</DetailWrapper>
			);
			return {
				node: heroImage,
				detail
			};
		});
	};

	return (
		<Wrapper>
			<CarouselSlider carouselSliderItems={getCarouselSliderItems()} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 56vw;
	justify-content: center;
	z-index: 0;
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
			to bottom right,
			rgba(255, 255, 255, 0),
			rgba(0, 0, 0, 0.8)
		),
		url(${(props) => props.src});
	position: absolute;
	background-position: center center;
	background-size: cover;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	opacity: 1;
	transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
`;

const PlayTrailerButton = styled.div`
	margin-right: auto;
	border-radius: 5px;
	display: flex;
	word-break: break-word;
	white-space: nowrap;
	user-select: none;
	justify-content: center;
	align-items: center;
	${StyledButton} {
		margin: 10px 0;
		padding-left: 2rem;
		padding-right: 2.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const StyledPlayVideo = styled(PlayVideo)`
	font-size: 14px;
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
