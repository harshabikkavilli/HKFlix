import React from 'react';
import styled from 'styled-components';
import {Colors} from '../../constants';
import {ModalConfig, ModalSize} from '../../types';
import BaseModal from './BaseModal';

export default function VideoModal(props: ModalConfig) {
	const {title, onClose, otherProps} = props;

	const renderVideo = () => {
		const videoSrc = `${
			otherProps && otherProps.videoLink
		}?rel=0&disablekb=1&autoplay=1&controls=0&showinfo=0&modestbranding=1`.replace(
			'watch?v=',
			'embed/'
		);
		return (
			<iframe
				src={videoSrc}
				title={title}
				width="100%"
				height="100%"
				frameBorder="no"
				allow="autoplay"
				scrolling="no"></iframe>
		);
	};

	return (
		<BaseModal
			title={title}
			onReject={onClose}
			modalSize={ModalSize.LARGE}
			showAbsoluteClose
			hideFooter>
			<ModalWrapper>{renderVideo()}</ModalWrapper>
		</BaseModal>
	);
}

const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 100%;
	width: 100%;
	background-color: ${Colors.black};
`;
