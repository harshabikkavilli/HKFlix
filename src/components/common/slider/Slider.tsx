import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import SliderControl, {
	SliderControlArrow,
	SliderControlWrapper
} from './SliderControl';
import SliderItem, {SliderItemWrapper} from './SliderItem';

type SliderProps = {
	nodes: any[];
};
export default function Slider(props: SliderProps) {
	const [sliderHasMoved, setSliderHasMoved] = useState(false); // boolean to display prev arrow
	const [sliderMoving, setSliderMoving] = useState(false); // boolean for slider animation
	const [movePercentage, setMovePercentage] = useState(0); // move percentage to shift slider during animation
	const [sliderMoveDirection, setSliderMoveDirection] = useState(''); // direction of movement of animation
	const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0); // lowest visible index of slider content
	const [itemsInRow, setItemsInRow] = useState(5); // number of items in the slider content changed dynamically on window size

	const {nodes} = props;
	const totalItems = nodes.length;

	useEffect(() => {
		handleWindowResize();
		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	});

	// handle window resize and sets items in row
	const handleWindowResize = () => {
		if (window.innerWidth > 1440) {
			setItemsInRow(6);
		} else if (window.innerWidth >= 1000) {
			setItemsInRow(5);
		} else if (window.innerWidth < 1000) {
			setItemsInRow(4);
		}
	};

	if (!nodes.length) return null;

	const renderSliderContent = () => {
		// gets the indexes to be displayed
		const left = [];
		const mid = [];
		const right = [];

		for (let i = 0; i < itemsInRow; i++) {
			// left
			if (sliderHasMoved) {
				if (lowestVisibleIndex + i - itemsInRow < 0) {
					left.push({
						index: totalItems - itemsInRow + lowestVisibleIndex + i,
						direction: 'left'
					});
				} else {
					left.push({
						index: i + lowestVisibleIndex - itemsInRow,
						direction: 'left'
					}); // issue here
				}
			}

			// mid
			if (i + lowestVisibleIndex >= totalItems) {
				mid.push({
					index: i + lowestVisibleIndex - totalItems,
					direction: 'mid'
				});
			} else {
				mid.push({
					index: i + lowestVisibleIndex,
					direction: 'mid'
				});
			}

			// right
			if (i + lowestVisibleIndex + itemsInRow >= totalItems) {
				right.push({
					index: i + lowestVisibleIndex + itemsInRow - totalItems,
					direction: 'right'
				});
			} else {
				right.push({
					index: i + lowestVisibleIndex + itemsInRow,
					direction: 'right'
				});
			}
		}

		// combine indexes
		const indexToDisplay = [...left, ...mid, ...right];

		// add on leading and trailing indexes for peek image when sliding
		if (sliderHasMoved) {
			const trailingIndex =
				indexToDisplay[indexToDisplay.length - 1].index === totalItems - 1
					? 0
					: indexToDisplay[indexToDisplay.length - 1].index + 1;
			const leadingIndex =
				indexToDisplay[0].index === 0
					? totalItems - 1
					: indexToDisplay[0].index - 1;

			indexToDisplay.unshift({index: leadingIndex, direction: 'left'});
			indexToDisplay.push({index: trailingIndex, direction: 'right'});
		}

		const sliderContents = [];
		indexToDisplay.forEach(({index, direction}) => {
			sliderContents.push(
				<SliderItem
					movie={nodes[index]}
					key={`${nodes[index].id}-${direction}-${index}`}
					width={100 / itemsInRow}
				/>
			);
		});

		// adds empty divs to take up appropriate spacing when slider at initial position
		if (!sliderHasMoved) {
			for (let i = 0; i < itemsInRow; i++) {
				sliderContents.unshift(
					<SliderItemWrapper
						width={100 / itemsInRow}
						key={i}></SliderItemWrapper>
				);
			}
		}

		return sliderContents;
	};

	const handlePrev = () => {
		// get the new lowest visible index
		let newIndex: number;
		if (lowestVisibleIndex < itemsInRow && lowestVisibleIndex !== 0) {
			newIndex = 0;
		} else if (lowestVisibleIndex - itemsInRow < 0) {
			newIndex = totalItems - itemsInRow;
		} else {
			newIndex = lowestVisibleIndex - itemsInRow;
		}

		// get the move percentage
		let newMovePercentage: number;
		if (lowestVisibleIndex === 0) {
			newMovePercentage = 0;
		} else if (lowestVisibleIndex - newIndex < itemsInRow) {
			newMovePercentage =
				((itemsInRow - (lowestVisibleIndex - newIndex)) / itemsInRow) * 100;
		} else {
			newMovePercentage = 0;
		}

		setSliderMoving(true);
		setSliderMoveDirection('left');
		setMovePercentage(newMovePercentage);

		setTimeout(() => {
			setLowestVisibleIndex(newIndex);
			setSliderMoving(false);
		}, 750);
	};

	const handleNext = () => {
		// get the new lowest visible index
		let newIndex: number;
		if (lowestVisibleIndex === totalItems - itemsInRow) {
			newIndex = 0;
		} else if (lowestVisibleIndex + itemsInRow > totalItems - itemsInRow) {
			newIndex = totalItems - itemsInRow;
		} else {
			newIndex = lowestVisibleIndex + itemsInRow;
		}

		// get the move percentage
		let newMovePercentage: number;
		if (newIndex !== 0) {
			newMovePercentage = ((newIndex - lowestVisibleIndex) / itemsInRow) * 100;
		} else {
			newMovePercentage = 100;
		}

		setSliderMoving(true);
		setSliderMoveDirection('right');
		setMovePercentage(newMovePercentage);

		setTimeout(() => {
			setLowestVisibleIndex(newIndex);
			setSliderMoving(false);
		}, 750);

		// slider has moved and show the previous arrow
		if (!sliderHasMoved) {
			setSliderHasMoved(true);
		}
	};

	let style = {};
	if (sliderMoving) {
		let translate = '';
		if (sliderMoveDirection === 'right') {
			translate = `translateX(-${100 + movePercentage + 100 / itemsInRow}%)`;
		} else if (sliderMoveDirection === 'left') {
			translate = `translateX(-${movePercentage + 100 / itemsInRow}%)`;
		}

		style = {
			transform: translate,
			transitionDuration: '750ms'
		};
	} else {
		style = {
			transform: `translateX(-${
				100 + (sliderHasMoved ? 100 / itemsInRow : 0)
			}%)`
		};
	}

	return (
		<SliderWrapper>
			{sliderHasMoved && (
				<SliderControl arrowDirection={'left'} onClick={handlePrev} />
			)}
			<SliderContentWrapper style={style}>
				{renderSliderContent()}
			</SliderContentWrapper>
			<SliderControl arrowDirection={'right'} onClick={handleNext} />
		</SliderWrapper>
	);
}

const SliderContentWrapper = styled.div`
	white-space: nowrap;
`;

const SliderWrapper = styled.div`
	padding: 0 4%;
	position: relative;
	margin-bottom: 40px;
	overflow-x: hidden;

	&:hover,
	&:active {
		${SliderControlWrapper} {
			background-color: rgba(20, 20, 20, 0.7);
		}

		${SliderControlArrow} {
			display: block;
		}
	}
`;
