import React, { useState } from 'react';
import Pagination from './Pagination';
import { Status } from '../../types/types';

const getStatusColor = (status: Status) => {
	switch (status) {
		case 'Active':
			return 'text-green-600'; // Use Tailwind CSS classes for green color
		case 'Pending':
			return 'text-yellow-500'; // Use Tailwind CSS classes for yellow color
		case 'Inactive':
			return 'text-red-500'; // Use Tailwind CSS classes for red color
		default:
			return '';
	}
};

export const Table: React.FunctionComponent<{
	data: Array<any>;
	itemsPerPage: number;
	onRowClick: (row: any) => void;
	handleSort: (column: any) => void;
	header: Array<string>;
}> = ({ data, itemsPerPage, header, onRowClick, handleSort }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedRowId, setSelectedRow] = useState<number | null>(null);
	const totalPages = Math.ceil(data.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const limitedData = data.slice(startIndex, startIndex + itemsPerPage);

	const emptyRows = Array.from({
		length: Math.max(itemsPerPage - limitedData.length, 0),
	});

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleRowClick = (row: any) => {
		setSelectedRow(row);
		onRowClick(row);
	};

	const handleHeaderClick = (head: string) => {
		handleSort(head);
	};

	return (
		<div>
			<table className="text-left w-full fixed-layout text-sm font-light">
				<thead className="border-b font-bold dark:border-neutral-500">
					<tr className="bg-gray-600 text-white rounded-lg">
						{header.map((head, index) => (
							<th
								key={index}
								onClick={() => handleHeaderClick(`${head}`)}
								className="px-4 py-4 hover:text-blue-300 hover:cursor-pointer"
							>
								{head}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{limitedData.map(row => (
						<tr
							key={row.id}
							className={`hover:bg-gray-400 h-14 hover:cursor-pointer border-b dark:border-neutral-300 ${
								row === selectedRowId ? 'bg-gray-400' : ''
							} `}
							onClick={() => handleRowClick(row)}
						>
							{Object.keys(row).map(key => (
								<td
									key={key}
									className={`whitespace-nowrap pl-4 pr-4 font-medium ${
										key === 'status'
											? getStatusColor(row[key])
											: ''
									}`}
								>
									{row[key]}
								</td>
							))}
						</tr>
					))}
					{emptyRows.map((_, index) => (
						<tr key={`_-${index}`} className="h-14">
							<td colSpan={8} className="p-6 border-b"></td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};
