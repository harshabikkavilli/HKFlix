// Configuration for IMDB-Api
const API_URL = 'https://api.themoviedb.org/3'; //tmdb-api
const API_KEY = 'ac83776d6ee036efe40216cfb32a693d'; //tmdb-api
// const API_ACCESS_TOKEN =
// 	'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzgzNzc2ZDZlZTAzNmVmZTQwMjE2Y2ZiMzJhNjkzZCIsInN1YiI6IjYxMGFlYmMwMzg0NjlhMDAyZmIyMDdmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.63e3p-lx-gsKS9Z8rmtoisMpUACqzGQG-Q8P9gScVWE';

const getTrailerLink = async ({id}: {id: string}) => {
	const trailerEndpoint = `${API_URL}/movie/${id}/videos?api_key=${API_KEY}`;
	const trailerResponse = await fetch(trailerEndpoint).then((response) =>
		response.json()
	);
	let trailerLink = '';
	if (trailerResponse && trailerResponse.results) {
		const trailer = trailerResponse.results.find(
			(video: any) => video.type === 'Trailer'
		);
		if (trailer) trailerLink = `https://www.youtube.com/embed/${trailer.key}`;
	}
	return trailerLink;
};

// We have to get chips after we get fish...
const getIntheatersList = async () => {
	const inTheatersEndpoint = `${API_URL}/movie/now_playing?api_key=${API_KEY}`;
	const inTheatersResponse = await fetch(inTheatersEndpoint).then((response) =>
		response.json()
	);

	const intheatersList = await inTheatersResponse.results.reduce(
		async (accumPromise: any, item: any) => {
			const accum = await accumPromise;
			const trailerLink = await getTrailerLink({id: item.id});
			accum.push({...item, trailerLink});
			return accum;
		},
		Promise.resolve([])
	);

	return intheatersList;
};

const getComingSoonList = async () => {
	const comingSoonEndpoint = `${API_URL}/movie/upcoming?api_key=${API_KEY}`;
	const comingSoonResponse = await fetch(comingSoonEndpoint).then((response) =>
		response.json()
	);

	// const intheatersList = await comingSoonResponse.items.reduce(
	// 	async (accumPromise: any, item: any) => {
	// 		const accum = await accumPromise;
	// 		const imageSrc = await getPosterImageSrc({
	// 			id: item.id,
	// 			image: item.image
	// 		});
	// 		const trailerLink = await getTrailerLink({id: item.id});
	// 		accum.push({...item, imageSrc, trailerLink});
	// 		return accum;
	// 	},
	// 	Promise.resolve([])
	// );

	return comingSoonResponse.results;
};
const getMostPopularMoviesList = async () => {
	const mostPopularMoviesEndpoint = `${API_URL}/movie/popular?api_key=${API_KEY}`;
	const mostPopularMoviesResponse = await fetch(
		mostPopularMoviesEndpoint
	).then((response) => response.json());

	// const mostPopularMoviesList = await mostPopularMoviesResponse.items.reduce(
	// 	async (accumPromise: any, item: any) => {
	// 		const accum = await accumPromise;
	// 		const imageSrc = await getPosterImageSrc({
	// 			id: item.id,
	// 			image: item.image
	// 		});
	// 		const trailerLink = await getTrailerLink({id: item.id});
	// 		accum.push({...item, imageSrc, trailerLink});
	// 		return accum;
	// 	},
	// 	Promise.resolve([])
	// );

	return mostPopularMoviesResponse.results;
};

export {getComingSoonList, getIntheatersList, getMostPopularMoviesList};
