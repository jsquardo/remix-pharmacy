/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{ts,tsx,jsx,js}", "node_modules/daisyui/dist/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				inter: "Inter",
			},
		},
	},
	plugins: [
		"@tailwindcss/forms",
		require("@tailwindcss/typography"),
		require("prettier-plugin-tailwindcss"),
		require("daisyui"),
	],
};
