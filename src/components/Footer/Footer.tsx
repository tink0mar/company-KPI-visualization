import React from 'react';
import { useThemeContext } from '../../ThemeContext';

const Footer: React.FC = () => {
	const { color } = useThemeContext();

	return (
		<footer className={`bg-${color}-900 text-white text-left p-4 pl-32`}>
			<p>
				&copy; {new Date().getFullYear()} Designed and developed by
				Martin Kozak
			</p>
		</footer>
	);
};

export default Footer;
