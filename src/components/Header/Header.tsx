import React from 'react';
import { useMyContext } from '../../ThemeContext';

export const Header = () => {
	const { color, updateValue } = useMyContext();

	return (
		<header
			className={`flex flex-col justify-center items-center h-screen/3 bg-gradient-to-r from-${color}-800 to-${color}-500 text-white p-4 text-4xl font-extrabold tracking-tight`}
		>
			<div className="flex flex-row">
				<div className="flex flex-col items-center mr-12">
					<div>
						Company{' '}
						<span className={`text-${color}-300`}> KPIs</span>
					</div>
					<div
						className={`bg-${color}-200 m-4 h-3 rounded-full w-96`}
					></div>
				</div>

				<button
					className="bg-gray-100 hover:bg-gray-300 text-xl p-2 m-5 rounded-lg text-red-500"
					onClick={() => updateValue('red')}
				>
					red
				</button>
				<button
					className="bg-gray-100 hover:bg-gray-300 text-xl p-2 m-5 rounded-lg text-green-500"
					onClick={() => updateValue('green')}
				>
					green
				</button>
				<button
					className="bg-gray-100 hover:bg-gray-300 text-xl p-2 m-5 rounded-lg text-blue-500"
					onClick={() => updateValue('blue')}
				>
					blue
				</button>
			</div>
		</header>
	);
};
