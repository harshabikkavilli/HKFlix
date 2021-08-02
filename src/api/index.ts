// Configuration for IMDB-Api
const API_URL = 'https://imdb-api.com/en/API/';
const API_KEY = 'k_zm3dqmp5';

const fetchInTheaters = () => {
	const endpoint = `${API_URL}InTheaters/${API_KEY}`;
	fetch(endpoint)
		.then((result) => result.json())
		.then((result) => {
			console.log('InTheaters : ', result);
		})
		.catch((error) => console.error('Error:', error));
};

export {fetchInTheaters};
