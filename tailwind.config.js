/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: "'Roboto'",
				poppins: "'Poppins'",
				iranSansX: "'IRANSansX'",
			},
			colors: {
				appGray: "#d4d4d4",
				thirdGray: "#faf9fb",
				appRed: "#DC2626",
				appText: "#6b7280",
				appBase: "#171717",
			},
		},
	},
	plugins: [],
};
