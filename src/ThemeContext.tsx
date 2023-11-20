import React, { createContext, useContext, ReactNode } from 'react';

export interface IThemeContext {
	color: 'red' | 'green' | 'blue';
	updateValue: (color: 'red' | 'green' | 'blue') => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeContextProvider: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [color, setValue] = React.useState<'red' | 'green' | 'blue'>('blue');

	const updateValue = (color: 'red' | 'green' | 'blue') => {
		setValue(color);
	};

	return (
		<div>
			<ThemeContext.Provider
				value={{
					color,
					updateValue,
				}}
			>
				{children}
			</ThemeContext.Provider>
		</div>
	);
};

export const useThemeContext = (): IThemeContext => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useMyContext must be used within a MyContextProvider');
	}

	return context;
};
