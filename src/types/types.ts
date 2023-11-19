export type SortingKeys =
	| 'id'
	| 'company'
	| 'industry'
	| 'location'
	| 'employeeCount'
	| 'yearFounded'
	| 'status'
	| 'region'
	| 'sector';

export type Status = 'Active' | 'Pending' | 'Inactive';

export type Sector =
	| 'Technology'
	| 'Energy'
	| 'Healthcare'
	| 'Education'
	| 'Automotive'
	| 'Food'
	| 'Fitness'
	| 'Media'
	| 'Finance'
	| 'Travel';

export type Region =
	| 'Europe'
	| 'South America'
	| 'North America'
	| 'Asia'
	| 'Australia'
	| 'Africa';

export interface MonthlyData {
	date: string;
	Revenue: number;
	Expenses: number;
	Profit: number;
}

export interface Entity {
	id: number;
	company: string;
	industry: string;
	location: string;
	employeeCount: number;
	yearFounded: number;
	status: Status;
	region: Region;
	sector: Sector;
	monthlyData: MonthlyData[];
}
