// React
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import BasePage from './components/BasePage';
import {Colors} from './constants';
import {withProviders} from './hoc';
import {ModalsProvider} from './providers/ModalsProvider';
import Routes from './routes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.darkBackground};
  }
`;

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<BasePage>
				<Routes />
			</BasePage>
		</BrowserRouter>
	);
}

export default withProviders([ModalsProvider])(App);
