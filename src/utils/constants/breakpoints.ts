export const breakpoints = {
	xsmall: '@media (max-width: 320px) ',
	small: '@media (min-width:321px) and (max-width: 420px)',
	minMedium: '@media (min-width:421px)',
	medium: '@media (min-width:421px) and (max-width: 768px) ',
	maxMedium: '@media (max-width:768px)',
	minLarge: '@media (min-width: 769px)',
	large: '@media (min-width:769px) and (max-width: 1024px)',
	xlarge: '@media (min-width: 1025px) and (max-width:1440px) ',
	xxlarge: '@media (min-width: 1441px) and (max-width:2879px)',
	xxxlarge: `@media (min-width: 2880px)`,
	values: {
		xsmall: 320,
		small: 420,
		medium: 728,
		large: 1024,
		xlarge: 1440,
	},
};
