import React from 'react';
import styled from 'styled-components';
import {Colors} from '../../constants';
import {ModalConfig, ModalSize} from '../../types';
import BaseModal from './BaseModal';

export default function VideoModal(props: ModalConfig) {
	const {title, onClose, otherProps} = props;

	const renderVideo = () => {
		let videoSrc = '';
		if (otherProps && otherProps.videoLink) {
			if (otherProps.videoLink.includes('www.youtube.com')) {
				videoSrc = `${otherProps.videoLink}?rel=0&disablekb=1&autoplay=1&controls=0&showinfo=0&modestbranding=1`.replace(
					'watch?v=',
					'embed/'
				);
			} else if (otherProps.videoLink.includes('www.imdb.com')) {
				videoSrc = `${otherProps.videoLink}?autoplay=true&controls=false&showinfo=false`;
			}
		}
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
