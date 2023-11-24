import React, { useState } from 'react';
import Pagination from './Pagination';
import { Status } from '../../types/types';


// Use memoization
const getStatusColor = (status: Status) => {
	switch (status) {
		case 'Active':
			return 'text-green-600';
		case 'Pending':
			return 'text-yellow-500';
		case 'Inactive':
			return 'text-red-500';
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
	// use custom hoook
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [selectedRowID, setSelectedRow] = useState<any | null>(null);
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
		setSelectedRow(row.id);
		onRowClick(row);
	};

	const handleHeaderClick = (head: string) => {
		handleSort(head);
	};

	const formatHead = (head: string) => {
		const formattedItem = head.replace(/([A-Z])/g, ' $1'); // Insert space before uppercase letter
		const formattedHead =
			formattedItem.charAt(0).toUpperCase() + formattedItem.slice(1); // Make the first letter uppercase

		return formattedHead;
	};

	return (
		<div>
			<table className="text-left w-full fixed-layout text-sm font-light">
				<thead className="border-b font-bold dark:border-neutral-500">
					<tr className={`bg-gray-600 text-white rounded-lg`}>
						{header.map((head, index) => {
							return (
								<th
									key={index}
									onClick={() => handleHeaderClick(`${head}`)}
									className="px-4 py-4 hover:text-blue-300 hover:cursor-pointer"
								>
									{formatHead(head)}
								</th>
							);
						})}
					</tr>
				</thead>
				// Move body into separate component
				<tbody>
					{limitedData.map(row => (
						<tr
							key={row.id}
							className={`hover:bg-gray-400 h-14 hover:cursor-pointer border-b dark:border-neutral-300 ${
								row.id === selectedRowID ? 'bg-gray-400' : ''
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
