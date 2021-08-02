// React
import React from 'react';
import styled from 'styled-components';
import {Colors} from '../constants';

type BasePageType = {
	children: JSX.Element;
};

export default function BasePage({children}: BasePageType) {
	return <BasePageWrapper>{children}</BasePageWrapper>;
}

const BasePageWrapper = styled.div`
	display: flex;
	justify-content: center;
	color: ${Colors.gray};
	text-align: center;
	position: relative;
`;
