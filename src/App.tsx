// React
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import BasePage from './components/BasePage';
import {withProviders} from './hoc';
import {ModalsProvider} from './providers/ModalsProvider';
import Routes from './routes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
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
