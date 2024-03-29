import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { CompanyTable } from './components/CompanyTable/CompanyTable';
import { data } from './data/data';
import { MonthlyData } from './types/types';
import Footer from './components/Footer/Footer';
import { Graph } from './components/Graph/Graph';

function App() {
	const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
	const [filteredData, setFilteredData] = useState<MonthlyData[]>([]);

	const handleSelectCompany = (company: string | null) => {
		setSelectedCompany(company);
		handleFilterData(company);
	};

	const handleFilterData = (selectedCompany: string | null) => {
		if (selectedCompany === null) {
			setFilteredData([]);
			return;
		}

		const filtered = data.filter(entity => {
			if (entity.company === selectedCompany) {
				return entity;
			}
		});

		setFilteredData(filtered[0].monthlyData);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="flex-grow p-4 bg-gray-300">
				<main className="flex flex-row place-content-stretch m-12 place-items-center ">
					<CompanyTable
						data={data}
						onSelectCompany={handleSelectCompany}
					/>
					<Graph
						monthlyData={filteredData}
						company={selectedCompany}
					/>
				</main>
			</div>

			<Footer />
		</div>
	);
}

export default App;
