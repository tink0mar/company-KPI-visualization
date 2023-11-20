import React, { useState } from 'react';
import { Entity, SortingKeys } from '../../types/types';
import { Select } from '../Select/Select';
import { Table } from '../Table/Table';

enum SortOrder {
	Ascending = 'asc',
	Descending = 'desc',
}

export const CompanyTable: React.FunctionComponent<{
	data: Array<Entity>;
	onSelectCompany: (company: string | null) => void;
}> = ({ data, onSelectCompany }) => {
	const itemsPerPage = 9;
	const [sortConfig, setSortConfig] = useState<{
		key: SortingKeys;
		direction: SortOrder;
	}>({
		key: 'company',
		direction: SortOrder.Ascending,
	});
	const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
	const [filteredStatus, setFilteredStatus] = useState<string | null>(null);
	const [filteredRegion, setFilteredRegion] = useState<string | null>(null);
	const [filteredSector, setFilteredSector] = useState<string | null>(null);

	const reducedData = data.map(({ monthlyData, ...rest }) => rest);

	const filteredData = reducedData.filter(entity => {
		return (
			(!filteredStatus || entity.status === filteredStatus) &&
			(!filteredRegion || entity.region === filteredRegion) &&
			(!filteredSector || entity.sector === filteredSector)
		);
	});

	const sortedData = [...filteredData].sort(
		(a: Omit<Entity, 'monthlyData'>, b: Omit<Entity, 'monthlyData'>) => {
			const isAscending =
				sortConfig.direction === SortOrder.Ascending ? 1 : -1;

			if (isAscending === 1) {
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return 1;
				} else {
					return -1;
				}
			} else {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return 1;
				} else {
					return -1;
				}
			}
		}
	);

	const handleClickedRow = (row: Entity) => {
		if (row.company === selectedCompany) {
			setSelectedCompany(null);
			onSelectCompany(null);
		}

		setSelectedCompany(row.company);
		onSelectCompany(row.company);
	};

	const handleSort = (key: SortingKeys) => {
		const direction =
			sortConfig.key === key &&
			sortConfig.direction === SortOrder.Ascending
				? SortOrder.Descending
				: SortOrder.Ascending;
		setSortConfig({ key, direction });
	};

	return (
		<div className="table-component w-1000 h-650 bg-gray-100 rounded-lg shadow-xl pb-4 mb-6">
			<div className="flex justify-center m-4 items-center">
				<div className="text-xl font-semibold mr-48"> Companies</div>

				<div className="flex justify-center ">
					<Select
						label="Status"
						options={['Active', 'Pending', 'Inactive']}
						value={filteredStatus}
						onChange={setFilteredStatus}
					/>
					<Select
						label="Region"
						options={[
							'Europe',
							'South America',
							'North America',
							'Asia',
							'Australia',
							'Africa',
						]}
						value={filteredRegion}
						onChange={setFilteredRegion}
					/>
					<Select
						label="Sector"
						options={[
							'Technology',
							'Energy',
							'Healthcare',
							'Education',
							'Automotive',
							'Food',
							'Fitness',
							'Media',
							'Finance',
							'Travel',
						]}
						value={filteredSector}
						onChange={setFilteredSector}
					/>
				</div>
			</div>
			<div className="table-component w-1000 h-1000 bg-gray-100 rounded-lg shadow-xl pb-4">
				<Table
					data={sortedData}
					itemsPerPage={itemsPerPage}
					onRowClick={handleClickedRow}
					handleSort={handleSort}
					header={[
						'id',
						'company',
						'industry',
						'location',
						'employeeCount',
						'yearFounded',
						'status',
						'region',
						'sector',
					]}
				/>
			</div>
		</div>
	);
};
