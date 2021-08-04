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
	/* max-width: 1920px; */
	margin: auto;
	justify-content: center;
	color: ${Colors.gray};
	text-align: center;
	flex: 1;
	overflow: auto;
`;
