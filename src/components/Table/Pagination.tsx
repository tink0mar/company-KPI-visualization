// src/components/Pagination/Pagination.tsx
import React from 'react';
import { useThemeContext } from '../../ThemeContext';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const { color } = useThemeContext();

	return (
		<div className="flex justify-center mt-4">
			{Array.from({ length: totalPages }, (_, index) => index + 1).map(
				page => (
					<button
						key={page}
						className={`mx-1 py-2 px-4 shadow-xl rounded-full ${
							currentPage === page
								? `bg-${color}-500 text-white`
								: `bg-white text-${color}-500`
						}`}
						onClick={() => onPageChange(page)}
					>
						{page}
					</button>
				)
			)}
		</div>
	);
};

export default Pagination;
