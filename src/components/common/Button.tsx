import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';
import styled, {css} from 'styled-components';
import {Colors} from '../../constants';

type ButtonType = {
	text?: string;
	onClick: () => void;
	noText?: boolean;
	children?: JSX.Element;
	variant?: string;
	unstyled?: boolean;
};

export default function Button({
	children,
	noText,
	text,
	onClick,
	unstyled = false,
	variant = 'primary'
}: ButtonType) {
	const onButtonClick = (e: any) => {
		e.stopPropagation();
		onClick();
	};
	return (
		<StyledButton
			unstyled={unstyled.toString()}
			variant={variant}
			onClick={onButtonClick}>
			{noText ? children : text}
		</StyledButton>
	);
}

export const StyledButton = styled(BootstrapButton)<{unstyled: string}>`
	font-size: 15px;
	padding: 5px 10px;
	margin: 0 10px;
	cursor: pointer;
	border-radius: 5px;

	${(props) =>
		props.unstyled === 'true' &&
		css`
			padding: 0;
			margin: 0;
		`}

	&:focus {
		outline: none;
		box-shadow: none;
		border-color: transparent;
	}

	&.btn-primary {
		background-color: ${Colors.primary};
		border: transparent;

		&:hover {
			background-color: ${Colors.buttonPrimaryHover};
		}
		&:active {
			background-color: ${Colors.primary} !important;
			border-color: transparent !important;
		}
	}

	&.btn-secondary {
		background-color: ${Colors.secondary};
		border: transparent;
		color: ${Colors.buttonSecondaryColor};

		&:hover {
			background-color: ${Colors.buttonSecondaryHover};
		}
		&:active {
			background-color: ${Colors.secondary} !important;
			border-color: transparent !important;
		}
	}
`;
