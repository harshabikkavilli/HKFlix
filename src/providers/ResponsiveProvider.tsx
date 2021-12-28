import React, {createContext, useContext} from 'react';
import {useMediaQuery} from 'react-responsive';

type ResponsiveContextType = {
	isBigScreen: boolean;
};
const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
	undefined
);

type Props = {
	children?: React.ReactNode;
};

export const ResponsiveProvider = ({children}: Props) => {
	const isBigScreen = useMediaQuery({query: '(min-width: 769px)'});

	return (
		<ResponsiveContext.Provider value={{isBigScreen}}>
			{children}
		</ResponsiveContext.Provider>
	);
};

export const useResponsive = () => useContext(ResponsiveContext);
