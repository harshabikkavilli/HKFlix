// React
import React from 'react';
import styled from 'styled-components';
import {Colors} from '../constants';
import Modals from './modals/Modals';

type BasePageType = {
	children: JSX.Element;
};

export default function BasePage({children}: BasePageType) {
	return (
		<BasePageWrapper>
			<Modals />
			{children}
		</BasePageWrapper>
	);
}

const BasePageWrapper = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	max-width: 1920px;
	justify-content: center;
	color: ${Colors.gray};
	text-align: center;
	position: relative;
`;
