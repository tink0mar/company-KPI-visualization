import React from 'react';
import { useThemeContext } from '../../ThemeContext';

export const Select: React.FunctionComponent<{
	label: string;
	options: Array<string>;
	value: string | null;
	onChange: (value: string) => void;
}> = ({ label, options, value, onChange }) => {
	const { color } = useThemeContext();

	return (
		<div className="ml-2 mr-2">
			<label htmlFor={`${label}Filter`}>{label}:</label>
			<select
				id={`${label}Filter`}
				onChange={e => onChange(e.target.value)}
				value={value || ''}
				className={`outline-none appearance-none ml-2 px-2 py-2  border bg-natural-400 rounded-lg border-2 border-${color}-500 shadow-2xl}`}
			>
				<option value="">All</option>
				{options.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};
