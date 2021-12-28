// React
import React from 'react';
import styled from 'styled-components';
import {Colors} from '../constants';
import Menu from './Menu';
import Modals from './modals/Modals';

type BasePageType = {
	children: JSX.Element;
};

export default function BasePage({children}: BasePageType) {
	return (
		<BasePageWrapper>
			<Modals />
			<Menu />
			{children}
		</BasePageWrapper>
	);
}

const BasePageWrapper = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	/* max-width: 1920px; */
	margin: auto;
	justify-content: center;
	color: ${Colors.gray};
	text-align: center;
	flex: 1;
	overflow: auto;
	position: relative;
`;
