import React, {createContext, useContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Modal, ModalBase} from '../types';

type ModalsContextType = {
	modals: Modal[];
	addModal: (modal: ModalBase) => void;
	closeModal: (id: string) => void;
	setModals: (value: Modal[]) => void;
};

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

type Props = {
	children?: React.ReactNode;
};

export const ModalsProvider = ({children}: Props) => {
	const [modals, setModals] = useState([] as Modal[]);

	const addModal = (modal: ModalBase) => {
		const id = uuidv4();
		const updatedModals = modals.concat({
			...modal,
			id
		});
		setModals(updatedModals);
	};

	const closeModal = (id: string) => {
		const updatedModals = modals.filter((modal) => modal.id !== id);
		setModals(updatedModals);
	};

	return (
		<ModalsContext.Provider value={{modals, addModal, setModals, closeModal}}>
			{children}
		</ModalsContext.Provider>
	);
};

export const useModals = () => useContext(ModalsContext);
