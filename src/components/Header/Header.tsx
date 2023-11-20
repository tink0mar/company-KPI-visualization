import React from 'react';
import { useThemeContext } from '../../ThemeContext';

export const Header = () => {
	const { color, updateValue } = useThemeContext();

	return (
		<div>
			<header
				className={`flex flex-col justify-center items-center h-screen/3 bg-gradient-to-r from-${color}-800 to-${color}-500  p-4  font-extrabold tracking-tight`}
			>
				<div className="flex flex-row">
					<div className="flex flex-col items-center mr-12">
						<div className="text-white text-4xl">
							Company{' '}
							<span className={`text-${color}-300`}> KPIs</span>
						</div>
						<div
							className={`bg-${color}-200 m-4 h-3 rounded-full w-96`}
						></div>
					</div>
				</div>
			</header>
			<div
				style={{
					position: 'absolute',
					right: 20,
					top: '7%',
					transform: 'translateY(-50%)',
				}}
				className="flex flex-row items-center position-space-around mr-10"
			>
				<div className="text-white text-2xl font-extrabold mr-4">
					Theme:
				</div>
				<select
					className={`outline-none appearance-none text-xl bg-gray-200 w-24 hover:bg-gray-300 p-2 rounded-lg text-${color}-500 font-extrabold`}
					onChange={e =>
						updateValue(e.target.value as 'blue' | 'green' | 'red')
					}
				>
					<option value="blue" className=" text-center">
						blue
					</option>
					<option value="red" className=" text-center">
						red
					</option>
					<option value="green" className=" text-center">
						green
					</option>
				</select>
			</div>
		</div>
	);
};
