import { VFC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecipeRoutes } from './routes/routes';
import { ThemeProvider as MuiThemeProvider } from '@mui/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const App: VFC = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<RecipeRoutes/>
				</BrowserRouter>
			</ThemeProvider>
		</MuiThemeProvider>

	);
};

export default App;
