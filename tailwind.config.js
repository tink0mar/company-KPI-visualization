/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			width: {
				1000: '1010px',
			},
			height: {
				650: '650px',
			},
		},
	},
	safelist: [
		{
			pattern:
				/bg-(red|green|blue)-(100|200|300|400|500|600|700|800|900|950)/,
		},
		{
			pattern:
				/text-(red|green|blue)-(100|200|300|400|500|600|700|800|900)/,
		},
		{
			pattern:
				/(from|to)-(red|green|blue)-(100|200|300|400|500|600|700|800|900)/,
		},
		{
			pattern: /(border)-(red|green|blue)-500/,
		},
	],
	plugins: [],
};
