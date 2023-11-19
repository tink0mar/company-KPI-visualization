import React from 'react';

export const Select: React.FunctionComponent<{
	label: string;
	options: Array<string>;
	value: string | null;
	onChange: (value: string) => void;
}> = ({ label, options, value, onChange }) => (
	<div className="ml-2 mr-2">
		<label htmlFor={`${label}Filter`}>{label}:</label>
		<select
			id={`${label}Filter`}
			onChange={e => onChange(e.target.value)}
			value={value || ''}
			className="appearance-none ml-2 px-2 py-2  border bg-natural-400 rounded-lg"
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
