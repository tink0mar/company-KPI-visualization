import React, { useState } from 'react';

import ReactApexChart from 'react-apexcharts';
import { MonthlyData } from '../../types/types';
import { useThemeContext } from '../../ThemeContext';

interface MonthlyKPI {
	totalRevenue: number;
	totalExpenses: number;
	totalProfit: number;
}

const calculateMonthlyKPI = (monthlyData: MonthlyData[]): MonthlyKPI => {
	const totalRevenue = monthlyData.reduce(
		(acc, entry) => acc + entry.Revenue,
		0
	);
	const totalExpenses = monthlyData.reduce(
		(acc, entry) => acc + entry.Expenses,
		0
	);
	const totalProfit = monthlyData.reduce(
		(acc, entry) => acc + entry.Profit,
		0
	);

	return { totalRevenue, totalExpenses, totalProfit };
};

export const Graph: React.FunctionComponent<{
	monthlyData: Array<MonthlyData>;
	company: string | null;
}> = ({ monthlyData, company }) => {
	const [chartType, setChartType] = useState<'line' | 'column'>('line');
	const { color } = useThemeContext();

	const { totalRevenue, totalExpenses, totalProfit } =
		calculateMonthlyKPI(monthlyData);

	const chartSeries = [
		{
			type: chartType,
			name: 'Revenue',
			data: monthlyData.map(entry => entry.Revenue),
		},
		{
			type: chartType,
			name: 'Expenses',
			data: monthlyData.map(entry => entry.Expenses),
		},
		{
			type: chartType,
			name: 'Profit',
			data: monthlyData.map(entry => entry.Profit),
		},
	];

	return (
		<div className="mx-auto w-4/12  bg-gray-100 rounded-lg p-1">
			<h2 className="text-xl font-semibold m-6 ml-10">Monthly KPI</h2>

			<div className="ml-10 flex">
				<div className="mr-6">
					<div>Company Name:</div>
					<div>Total Revenue:</div>
					<div>Total Expenses:</div>
					<div>Total Profit:</div>
				</div>

				<div>
					<div className="font-bold">
						{company ? company : 'no selected company'}
					</div>
					<div className="font-bold">
						{totalRevenue ? totalRevenue.toFixed(2) : 0}$
					</div>
					<div className="font-bold">
						{totalExpenses ? totalExpenses.toFixed(2) : 0}$
					</div>
					<div className="font-bold">
						{totalProfit ? totalProfit.toFixed(2) : 0}$
					</div>
				</div>
			</div>

			<div className=" flex w-52 ml-10 flex-row mt-10 ">
				<button
					className={`flex-1 py-2 text-center focus:outline-none ${
						chartType === 'line'
							? `bg-${color}-500 text-white`
							: ' text-black'
					}`}
					onClick={() => setChartType('line')}
				>
					Line Chart
				</button>
				<div className="w-px bg-gray-300 mx-2"></div>
				<button
					className={`flex-1 py-2 text-center focus:outline-none ${
						chartType === 'column'
							? `bg-${color}-500 text-white`
							: 'text-black'
					}`}
					onClick={() => setChartType('column')}
				>
					Bar Chart
				</button>
			</div>

			<div className=" p-4 ">
				<ReactApexChart
					style={{
						'.apexcharts-tooltip': {
							'background-color': 'black',
							color: 'black',
						},
					}}
					options={{
						chart: {
							height: 350,
							zoom: {
								enabled: false,
							},
							toolbar: {
								show: false,
							},
						},

						xaxis: {
							type: 'datetime',
							categories: monthlyData.map(entry => entry.date),
							title: {
								text: 'Date',
							},
						},
						yaxis: {
							title: {
								text: 'Amount in USD',
							},
						},
						legend: {
							position: 'top',
							onItemClick: {
								toggleDataSeries: true,
							},
							onItemHover: {
								highlightDataSeries: false,
							},
						},
					}}
					series={chartSeries}
				/>
			</div>
		</div>
	);
};
