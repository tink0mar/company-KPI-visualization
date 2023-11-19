import React, { useContext } from 'react';
import { useMyContext } from '../../ThemeContext';

const Footer: React.FC = () => {
	const { color } = useMyContext();

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
