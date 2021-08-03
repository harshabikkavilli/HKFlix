import React from 'react';
import styled from 'styled-components';
import {useModals} from '../../providers/ModalsProvider';
import {ModalConfig, ModalTypes} from '../../types';
import VideoModal from './VideoModal';

const MODAL_CONFIG = new Map<
	ModalTypes,
	{
		Container: React.FC<ModalConfig>;
		props?: ModalConfig;
	}
>([
	[
		ModalTypes.PlayVideo,
		{
			Container: VideoModal
		}
	]
]);

export default function Modals() {
	const {modals, closeModal} = useModals()!;

	function hideModal(id: string) {
		closeModal(id);
	}

	return (
		<ModalsWrapper>
			{modals.map((modal) => {
				const modalConfig = MODAL_CONFIG.get(modal.type);
				const Component = modalConfig?.Container;
				const props = modalConfig?.props;
				const combinedProps = {
					...props,
					...modal.props
				};
				return (
					Component && (
						<Component
							key={modal.id}
							{...combinedProps}
							onClose={() => hideModal(modal.id)}
						/>
					)
				);
			})}
		</ModalsWrapper>
	);
}

const ModalsWrapper = styled.div``;
