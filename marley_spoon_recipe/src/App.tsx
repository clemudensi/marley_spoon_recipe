import { VFC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecipeRoutes } from './routes/routes';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from './theme';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            useErrorBoundary: true,
        },
    },
});

const App: VFC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<StylesProvider injectFirst>
				<MuiThemeProvider theme={theme}>
					<ThemeProvider theme={theme}>
						<BrowserRouter>
							<RecipeRoutes/>
						</BrowserRouter>
					</ThemeProvider>
				</MuiThemeProvider>
			</StylesProvider>
		</QueryClientProvider>
	);
};

export default App;
