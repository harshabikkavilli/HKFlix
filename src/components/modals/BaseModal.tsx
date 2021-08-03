import React from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import {Colors} from '../../constants';
import {ModalConfig, ModalSize} from '../../types';
import Button, {StyledButton} from '../common/Button';

export type ModalProps = ModalConfig & {
	children: JSX.Element;
	hideFooter?: boolean;
	showAbsoluteClose?: boolean;
};

export default function BaseModal({
	title,
	acceptString,
	rejectString,
	modalSize,
	onAccept,
	onReject,
	children,
	showAbsoluteClose = false,
	hideFooter = false
}: ModalProps) {
	const getDialogClassName = () => {
		switch (modalSize) {
			case ModalSize.LARGE:
				return 'modal-large';
			default:
				return 'modal-default';
		}
	};

	function renderHeader() {
		return showAbsoluteClose && onReject ? (
			<CloseButton>
				<Button onClick={onReject} text="x" variant="dark" unstyled />
			</CloseButton>
		) : (
			<StyledHeader closeButton>
				<Modal.Title>{title}</Modal.Title>
			</StyledHeader>
		);
	}

	function renderFooter() {
		return (
			<StyledFooter>
				{onAccept && <Button onClick={onAccept} text={acceptString} />}
				{onReject && (
					<Button variant="secondary" onClick={onReject} text={rejectString} />
				)}
			</StyledFooter>
		);
	}

	return (
		<StyledModal
			show={true}
			onHide={onReject}
			size="lg"
			dialogClassName={getDialogClassName()}
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			{renderHeader()}
			<Modal.Body style={{padding: 0}}>{children}</Modal.Body>
			{!hideFooter && renderFooter()}
		</StyledModal>
	);
}

const StyledModal = styled(Modal)`
	.modal-large {
		max-width: 90vw;
		height: 600px;
	}

	.modal-content {
		height: 100%;
	}
`;

const CloseButton = styled.div`
	position: absolute;
	z-index: 1;
	background-color: ${Colors.black};
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: flex-end;

	${StyledButton} {
		border: none;
		padding: 3px 10px;
		margin: 15px;
		border-radius: 50%;
		background-color: ${Colors.black};
		:hover {
			background-color: ${Colors.darkgray};
		}
	}
`;

const StyledHeader = styled(Modal.Header)`
	border-bottom: solid 1px ${Colors.lightgray};
	background-color: ${Colors.primary};
	color: ${Colors.white};

	.close {
		color: ${Colors.white};
	}
`;

const StyledFooter = styled(Modal.Footer)`
	border-top: solid 1px ${Colors.lightgray};
	background-color: ${Colors.controls};
`;
