// Configuration for IMDB-Api
const API_URL = 'https://imdb-api.com/en/API/';
// const API_KEY = 'k_zm3dqmp5';
const API_KEY = 'k_szm69445';

const fetchInTheaters = function (callback: any) {
	const endpoint = `${API_URL}InTheaters/${API_KEY}`;
	fetch(endpoint)
		.then((result) => result.json())
		.then((result) => {
			callback(result.items);
		})
		.catch((error) => console.error('InTheaters Error:', error));
};

const getPosterImageSrc = async ({id, image}: {id: string; image: string}) => {
	let imageSrc = image;
	const postersEndpoint = `${API_URL}Posters/${API_KEY}/${id}`;
	const postersResponse = await fetch(postersEndpoint).then((response) =>
		response.json()
	);
	const {backdrops, posters} = postersResponse;
	if (backdrops && backdrops.length) imageSrc = backdrops[0].link;
	else if (posters && posters.length) imageSrc = posters[0].link;

	return imageSrc;
};

const getTrailerLink = async ({id}: {id: string}) => {
	const trailerEndpoint = `${API_URL}Trailer/${API_KEY}/${id}`;
	const trailerResponse = await fetch(trailerEndpoint).then((response) =>
		response.json()
	);
	const {linkEmbed} = trailerResponse;
	return linkEmbed;
};

const trailer = {
	imDbId: 'tt1375666',
	title: 'Inception',
	fullTitle: 'Inception (2010)',
	type: 'Movie',
	year: '2010',
	videoId: 'vi2959588889',
	videoTitle: '10th Anniversary Dream Trailer',
	videoDescription:
		'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
	thumbnailUrl:
		'https://m.media-amazon.com/images/M/MV5BMTQ1ZmIzOTAtNDcwZi00NDVkLWE4NWItYWNhZGY1MmVlZGU0XkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg',
	uploadDate: '08/02/2020 21:45:05',
	link: 'https://www.imdb.com/video/vi2959588889',
	linkEmbed: 'https://www.imdb.com/video/imdb/vi2959588889/imdb/embed',
	errorMessage: ''
};

const intheatersList = [
	{
		id: 'tt0870154',
		title: 'Jungle Cruise',
		fullTitle: 'Jungle Cruise (2021)',
		year: '2021',
		releaseState: 'Opening This Week - July 30',
		image:
			'https://m.media-amazon.com/images/M/MV5BNDE1MGRlNTQtZjc4ZC00MTI0LWEwY2MtODk1YTM2NmFmYTNmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,4,128,176_AL_.jpg',
		runtimeMins: '127',
		runtimeStr: '2h 7mins',
		plot:
			"Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.",
		contentRating: 'PG-13',
		imDbRating: '',
		imDbRatingCount: '',
		metacriticRating: '49',
		genres: 'Action, Adventure, Comedy, Fantasy',
		genreList: [
			{
				key: 'Action',
				value: 'Action'
			},
			{
				key: 'Adventure',
				value: 'Adventure'
			},
			{
				key: 'Comedy',
				value: 'Comedy'
			},
			{
				key: 'Fantasy',
				value: 'Fantasy'
			}
		],
		directors: 'Jaume Collet-Serra',
		directorList: [
			{
				id: 'nm1429471',
				name: 'Jaume Collet-Serra'
			}
		],
		stars: 'Dwayne Johnson, Emily Blunt, Edgar Ramírez, Jack Whitehall',
		starList: [
			{
				id: 'nm0425005',
				name: 'Dwayne Johnson'
			},
			{
				id: 'nm1289434',
				name: 'Emily Blunt'
			},
			{
				id: 'nm1183149',
				name: 'Edgar Ramírez'
			},
			{
				id: 'nm3099754',
				name: 'Jack Whitehall'
			}
		],
		imageSrc:
			'https://imdb-api.com/posters/original/bwBmo4I3fqMsVvVtamyVJHXGnLF.jpg',
		trailerLink: 'https://www.youtube.com/watch?v=Jvurpf91omw',
		videoId: 'Jvurpf91omw'
	},
	{
		trailerLink: 'https://www.youtube.com/watch?v=Jvurpf91omw',
		videoId: 'Jvurpf91omw',
		id: 'tt9243804',
		title: 'The Green Knight',
		fullTitle: 'The Green Knight (2021)',
		year: '2021',
		releaseState: 'Opening This Week - July 30',
		image:
			'https://m.media-amazon.com/images/M/MV5BMjMxNTdiNWMtOWY0My00MjM4LTkwNzMtOGI0YThhN2Q4M2I4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,4,128,176_AL_.jpg',
		runtimeMins: '130',
		runtimeStr: '2h 10mins',
		plot:
			'A fantasy re-telling of the medieval story of Sir Gawain and the Green Knight.',
		contentRating: 'R',
		imDbRating: '',
		imDbRatingCount: '',
		metacriticRating: '84',
		genres: 'Adventure, Drama, Fantasy',
		genreList: [
			{
				key: 'Adventure',
				value: 'Adventure'
			},
			{
				key: 'Drama',
				value: 'Drama'
			},
			{
				key: 'Fantasy',
				value: 'Fantasy'
			}
		],
		directors: 'David Lowery',
		directorList: [
			{
				id: 'nm1108007',
				name: 'David Lowery'
			}
		],
		stars: 'Dev Patel, Alicia Vikander, Joel Edgerton, Sarita Choudhury',
		starList: [
			{
				id: 'nm2353862',
				name: 'Dev Patel'
			},
			{
				id: 'nm2539953',
				name: 'Alicia Vikander'
			},
			{
				id: 'nm0249291',
				name: 'Joel Edgerton'
			},
			{
				id: 'nm0002004',
				name: 'Sarita Choudhury'
			}
		],
		imageSrc:
			'https://imdb-api.com/posters/original/al0aXl47cWkf4jnKuPiEZtjWT8j.jpg'
	},
	{
		videoId: 'Jvurpf91omw',
		trailerLink: 'https://www.youtube.com/watch?v=Jvurpf91omw',
		id: 'tt10696896',
		title: 'Stillwater',
		fullTitle: 'Stillwater (2021)',
		year: '2021',
		releaseState: 'Opening This Week - July 30',
		image:
			'https://m.media-amazon.com/images/M/MV5BN2IzMTUyMDUtZGJmZC00YWMzLWFhMGMtZjQwMTkzMzViMjFkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,4,128,176_AL_.jpg',
		runtimeMins: '139',
		runtimeStr: '2h 19mins',
		plot:
			"A father travels from Oklahoma to France to help his estranged daughter, who is in prison for a murder she claims she didn't commit.",
		contentRating: 'R',
		imDbRating: '',
		imDbRatingCount: '',
		metacriticRating: '60',
		genres: 'Crime, Drama, Thriller',
		genreList: [
			{
				key: 'Crime',
				value: 'Crime'
			},
			{
				key: 'Drama',
				value: 'Drama'
			},
			{
				key: 'Thriller',
				value: 'Thriller'
			}
		],
		directors: 'Tom McCarthy',
		directorList: [
			{
				id: 'nm0565336',
				name: 'Tom McCarthy'
			}
		],
		stars: 'Matt Damon, Camille Cottin, Abigail Breslin, Lilou Siauvaud',
		starList: [
			{
				id: 'nm0000354',
				name: 'Matt Damon'
			},
			{
				id: 'nm1891185',
				name: 'Camille Cottin'
			},
			{
				id: 'nm1113550',
				name: 'Abigail Breslin'
			},
			{
				id: 'nm11144034',
				name: 'Lilou Siauvaud'
			}
		],
		imageSrc:
			'https://imdb-api.com/posters/original/sFHKmVxJYoNK08yz0WbJrxeK4iI.jpg'
	},
	{
		videoId: 'Jvurpf91omw',
		trailerLink: 'https://www.youtube.com/watch?v=Jvurpf91omw',
		id: 'tt10388028',
		title: 'Enemies of the State',
		fullTitle: 'Enemies of the State (2020)',
		year: '2020',
		releaseState: 'Opening This Week - July 30',
		image:
			'https://m.media-amazon.com/images/M/MV5BYTMwYTg3YzUtODgwMi00MTJlLTg3MjUtMjVlZTZmMzYwMGIwXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_UX128_CR0,3,128,176_AL_.jpg',
		runtimeMins: '103',
		runtimeStr: '1h 43mins',
		plot:
			'An American family becomes entangled in a bizarre web of secrets and lies when their hacker son is targeted by the U.S. government, making them all ENEMIES OF THE STATE.',
		contentRating: '',
		imDbRating: '',
		imDbRatingCount: '',
		metacriticRating: '71',
		genres: 'Documentary',
		genreList: [
			{
				key: 'Documentary',
				value: 'Documentary'
			}
		],
		directors: 'Sonia Kennebeck',
		directorList: [
			{
				id: 'nm4807418',
				name: 'Sonia Kennebeck'
			}
		],
		stars: 'Joel Widman, Stuart Anderson, Nemo Baletic, Angela Barbosa',
		starList: [
			{
				id: 'nm8282623',
				name: 'Joel Widman'
			},
			{
				id: 'nm12264735',
				name: 'Stuart Anderson'
			},
			{
				id: 'nm11286556',
				name: 'Nemo Baletic'
			},
			{
				id: 'nm5051045',
				name: 'Angela Barbosa'
			}
		],
		imageSrc:
			'https://imdb-api.com/posters/original/4Lc7z9nRXVcmTx6FYN0lcLrqxUX.jpg'
	},
	{
		videoId: 'Jvurpf91omw',
		trailerLink: 'https://www.youtube.com/watch?v=Jvurpf91omw',
		id: 'tt10451852',
		title: 'Nine Days',
		fullTitle: 'Nine Days (2020)',
		year: '2020',
		releaseState: 'Opening This Week - July 30',
		image:
			'https://m.media-amazon.com/images/M/MV5BNGUzOTQwZDUtZjkxOS00YjNmLThmMWYtZjA3Y2M4MmU4Mjg0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,4,128,176_AL_.jpg',
		runtimeMins: '124',
		runtimeStr: '2h 4mins',
		plot:
			'A reclusive man conducts a series of interviews with human souls for a chance to be born.',
		contentRating: 'R',
		imDbRating: '',
		imDbRatingCount: '',
		metacriticRating: '71',
		genres: 'Drama, Fantasy',
		genreList: [
			{
				key: 'Drama',
				value: 'Drama'
			},
			{
				key: 'Fantasy',
				value: 'Fantasy'
			}
		],
		directors: 'Edson Oda',
		directorList: [
			{
				id: 'nm4043005',
				name: 'Edson Oda'
			}
		],
		stars: 'Winston Duke, Zazie Beetz, Benedict Wong, Tony Hale',
		starList: [
			{
				id: 'nm6328300',
				name: 'Winston Duke'
			},
			{
				id: 'nm5939164',
				name: 'Zazie Beetz'
			},
			{
				id: 'nm0938950',
				name: 'Benedict Wong'
			},
			{
				id: 'nm0355024',
				name: 'Tony Hale'
			}
		],
		imageSrc:
			'https://imdb-api.com/posters/original/jKE8j4ezIAkxS5uXKrMBLgz1EVr.jpg'
	},
	{
		videoId: 'Jvurpf91omw',
		trailerLink: 'https://www.youtube.com/watch?v=Jvurpf91omw',
		id: 'tt11656220',
		title: 'Midnight in the Switchgrass',
		fullTitle: 'Midnight in the Switchgrass (2021)',
		year: '2021',
		releaseState: 'Opening This Week - July 30',
		image:
			'https://m.media-amazon.com/images/M/MV5BMTRkZmUwZjktMGU3NC00Y2ZjLTg0NTMtZDYyNzQ4MDNhMTY2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,4,128,176_AL_.jpg',
		runtimeMins: '99',
		runtimeStr: '1h 39mins',
		plot:
			'An FBI agent and Florida State officer team up to investigate a string of unsolved murder cases.',
		contentRating: 'R',
		imDbRating: '',
		imDbRatingCount: '',
		metacriticRating: '21',
		genres: 'Action, Crime, Thriller',
		genreList: [
			{
				key: 'Action',
				value: 'Action'
			},
			{
				key: 'Crime',
				value: 'Crime'
			},
			{
				key: 'Thriller',
				value: 'Thriller'
			}
		],
		directors: 'Randall Emmett',
		directorList: [
			{
				id: 'nm0256542',
				name: 'Randall Emmett'
			}
		],
		stars: 'Emile Hirsch, Megan Fox, Bruce Willis, Lukas Haas',
		starList: [
			{
				id: 'nm0386472',
				name: 'Emile Hirsch'
			},
			{
				id: 'nm1083271',
				name: 'Megan Fox'
			},
			{
				id: 'nm0000246',
				name: 'Bruce Willis'
			},
			{
				id: 'nm0001305',
				name: 'Lukas Haas'
			}
		],
		imageSrc:
			'https://imdb-api.com/posters/original/gMHgC7DinDS5CC3Xx5z7KwDhenC.jpg'
	},
	{
		videoId: 'Jvurpf91omw',
		trailerLink: 'https://www.youtube.com/watch?v=Jvurpf91omw',
		id: 'tt14673560',
		title: 'Ride the Eagle',
		fullTitle: 'Ride the Eagle (2021)',
		year: '2021',
		releaseState: 'Opening This Week - July 30',
		image:
			'https://m.media-amazon.com/images/M/MV5BZjlmYTRhMWItOGFiNC00NTczLTg4ODgtNWU0ZTVlOTg3ZTM1XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX128_CR0,4,128,176_AL_.jpg',
		runtimeMins: '88',
		runtimeStr: '1h 28mins',
		plot:
			'Leif is left with a conditional inheritance when his estranged mother Honey dies. Before he can move into her picturesque Yosemite cabin, he has to complete her elaborate, and sometimes dubious, to-do list.',
		contentRating: '',
		imDbRating: '',
		imDbRatingCount: '',
		metacriticRating: '58',
		genres: 'Comedy, Drama',
		genreList: [
			{
				key: 'Comedy',
				value: 'Comedy'
			},
			{
				key: 'Drama',
				value: 'Drama'
			}
		],
		directors: "Trent O'Donnell",
		directorList: [
			{
				id: 'nm2094436',
				name: "Trent O'Donnell"
			}
		],
		stars: "Jake Johnson, Susan Sarandon, D'Arcy Carden, J.K. Simmons",
		starList: [
			{
				id: 'nm2159926',
				name: 'Jake Johnson'
			},
			{
				id: 'nm0000215',
				name: 'Susan Sarandon'
			},
			{
				id: 'nm3639013',
				name: "D'Arcy Carden"
			},
			{
				id: 'nm0799777',
				name: 'J.K. Simmons'
			}
		],
		imageSrc:
			'https://imdb-api.com/posters/original/7nzBh88HZk4r0QqMSb9khCIYEXO.jpg'
	},
	{
		videoId: 'Jvurpf91omw',
		trailerLink: 'https://www.youtube.com/watch?v=Jvurpf91omw',
		id: 'tt8433210',
		title: 'A Dark Foe',
		fullTitle: 'A Dark Foe (2020)',
		year: '2020',
		releaseState: 'Opening This Week - July 30',
		image:
			'https://m.media-amazon.com/images/M/MV5BNTYxZmUxMTEtMzcxNS00ZGVhLWFlMDAtY2Y5NjQwNTg4MTZiXkEyXkFqcGdeQXVyMTAyMzkyOTgy._V1_UX128_CR0,4,128,176_AL_.jpg',
		runtimeMins: '114',
		runtimeStr: '1h 54mins',
		plot:
			'A guilt-ridden FBI agent, stranded in the painful memory of the abduction of his sister, suffers from a rare condition known as Nyctophobia, an irrational fear of the dark, and will have to face-off with the cunning serial killer who took her away.',
		contentRating: 'R',
		imDbRating: '',
		imDbRatingCount: '',
		metacriticRating: '',
		genres: 'Crime, Drama, Horror, Mystery, Thriller',
		genreList: [
			{
				key: 'Crime',
				value: 'Crime'
			},
			{
				key: 'Drama',
				value: 'Drama'
			},
			{
				key: 'Horror',
				value: 'Horror'
			},
			{
				key: 'Mystery',
				value: 'Mystery'
			},
			{
				key: 'Thriller',
				value: 'Thriller'
			}
		],
		directors: 'Maria Gabriela Cardenas',
		directorList: [
			{
				id: 'nm6179825',
				name: 'Maria Gabriela Cardenas'
			}
		],
		stars: 'Oscar Cardenas, Kenzie Dalton, Selma Blair, Graham Greene',
		starList: [
			{
				id: 'nm0136393',
				name: 'Oscar Cardenas'
			},
			{
				id: 'nm2242932',
				name: 'Kenzie Dalton'
			},
			{
				id: 'nm0004757',
				name: 'Selma Blair'
			},
			{
				id: 'nm0001295',
				name: 'Graham Greene'
			}
		],
		imageSrc:
			'https://imdb-api.com/posters/original/dnlC4kX8qNKdGq0RyITmTMSNWRE.jpg'
	}
];

// We have to get chips after we get fish...
const getIntheatersList = async () => {
	// const inTheatersEndpoint = `${API_URL}InTheaters/${API_KEY}`;
	// const inTheatersResponse = await fetch(inTheatersEndpoint).then((response) =>
	// 	response.json()
	// );

	// const intheatersList = await inTheatersResponse.items.reduce(
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

	return intheatersList;
};

export {fetchInTheaters, getIntheatersList, getPosterImageSrc};
