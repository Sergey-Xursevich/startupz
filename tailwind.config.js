/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "alba": "#46B8C8",
	  "black-light": "#3D4F5C",
	  "orange-basic": "#FB8958",
	  "white-gray": "#FBFAFA",
	  "green-light": "#A9BC87",
	  "aqua-light": "#8BB5C9",
	  "sky-light": "#00A0B6",
	  "purple-light": "#8B60D3",
	  "yellow-gray": "#FFC351",
	  "black-gray": "#939393",	  
    },
	fontFamily: {
		circular: ["Circular", "cursive"],
	},
	width: {
		"1/10": "10%",
		"2/10": "20%",
		"3/10": "30%",
		"4/10": "40%",
		"5/10": "50%",
		"6/10": "60%",
		"7/10": "70%",
		"8/10": "80%",
		"9/10": "90%",
	},
	extend: {
		boxShadow: {
			'stack-info-shadow': "0px 8px 35px 0px #BBA98E26"
		}
	}
  },
  plugins: [],
};
