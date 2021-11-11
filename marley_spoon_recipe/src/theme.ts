import { createTheme } from '@mui/material/styles';

const colors = {
	primary: '#FDE057',
	secondary: '#46D7AB',
	accent: '#A3E3D9',
	grey: '#E9E7E6',
	white: '#FFFFFF',
	transparent: 'transparent'
};

const theme = createTheme({
	components: {
		MuiChip: {
			styleOverrides: {
				root: {
					"&$selected": {
						backgroundColor: '#E3E7EB',
						"&:hover": {
								backgroundColor: '#E3E7EB',
						},
					},
				},
			},
		},
	},
	spacing: (factor: number) => `${0.5 * factor}rem`,
	palette: {
		primary: {
				main: colors.primary,
		},
		secondary: {
			light: colors.accent,
				main: colors.secondary,
		},
	},
	typography: {
		fontSize: 16,
		body1: {
				fontSize: '1rem',
		},
		h1: {
				fontSize: '2.125rem', // 34px
		},
		h2: {
				fontSize: '1.75rem', // 28px
		},
		h3: {
				fontSize: '1.375rem', // 22px
		},
		h4: {
				fontSize: '1.25rem', // 20px
		},
		caption: {
				fontSize: '0.6875rem', // 11px
		},
	},
});

export { colors, theme }