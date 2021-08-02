// React
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import BasePage from './components/BasePage';
import {withProviders} from './hoc';
import Routes from './routes';

function App() {
	return (
		<BrowserRouter>
			<BasePage>
				<Routes />
			</BasePage>
		</BrowserRouter>
	);
}

export default withProviders([])(App);
