// Modals
export enum ModalTypes {
	PlayVideo = 'modals/playVideo'
}

export enum ModalSize {
	LARGE = 'LARGE'
}

export type ModalConfig = {
	title?: string;
	onAccept?: () => void;
	onReject?: () => void;
	onClose?: () => void;
	acceptString?: string;
	rejectString?: string;
	modalSize?: ModalSize;
	otherProps?: any;
};

export type ModalBase = {
	type: ModalTypes;
	props: ModalConfig;
};

export type Modal = ModalBase & {
	id: string;
};
