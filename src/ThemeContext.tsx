import React, { createContext, useContext, ReactNode } from 'react';

export interface ThemeContext {
	color: 'red' | 'green' | 'blue';
	updateValue: (color: 'red' | 'green' | 'blue') => void;
}

export const MyContext = createContext<ThemeContext | undefined>(undefined);

export const MyContextProvider: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [color, setValue] = React.useState<'red' | 'green' | 'blue'>('blue');

	const updateValue = (color: 'red' | 'green' | 'blue') => {
		setValue(color);
	};

	const contextValue: ThemeContext = {
		color,
		updateValue,
	};

	return (
		<div>
			<MyContext.Provider value={contextValue}>
				{children}
			</MyContext.Provider>
		</div>
	);
};

export const useMyContext = (): ThemeContext => {
	const context = useContext(MyContext);

	if (!context) {
		throw new Error('useMyContext must be used within a MyContextProvider');
	}

	return context;
};
