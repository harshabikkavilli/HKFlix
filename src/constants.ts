// Colors
export enum Colors {
	blue = '#007bff',
	indigo = '#6610f2',
	purple = '#6f42c1',
	pink = '#e83e8c',
	red = '#dc3545',
	orange = '#fd7e14',
	yellow = '#ffc107',
	green = '#28a745',
	teal = '#20c997',
	cyan = '#17a2b8',
	white = '#fff',
	black = '#000',
	gray = '#6c757d',
	lightgray = '#d3d3d3',
	darkgray = '#343a40',
	primary = '#4148ba',
	secondary = '#d4d4d4',
	success = '#d4edda',
	info = '#d1ecf1',
	warn = '#fff3cd',
	fail = '#f8d7da',
	light = '#f8f9fa',
	dark = '#343a40',
	controls = '#ededed',
	darkBackground = '#141414',
	iconBackground = '#8196b4',
	buttonPrimaryHover = '#5a63ed',
	buttonSecondaryHover = '#e7e7e9',
	buttonSecondaryColor = '#0d0c22',
	successText = '#155724',
	infoText = '#0c5460',
	warnText = '#856404',
	failText = '#721c24',
	successBorder = '#b1dfbb',
	infoBorder = '#abdde5',
	warnBorder = '#ffe8a1',
	failBorder = '#f1b0b7',
	toolbarBackground = '#dcf1f5',
	appBackground = '#f5f5f5'
}

// Z-Index
export enum ZIndex {
	Alert = 1000,
	Toast = 999,
	Modal = 998,
	Navbar = 997
}

// Breakpoints
export enum Breakpoints {
	xsmall = '0',
	sm = '576px',
	md = '768px',
	lg = '992px',
	xl = '1200px'
}

export const genres = [
	{id: 28, name: 'Action'},
	{id: 12, name: 'Adventure'},
	{id: 16, name: 'Animation'},
	{id: 35, name: 'Comedy'},
	{id: 80, name: 'Crime'},
	{id: 99, name: 'Documentary'},
	{id: 18, name: 'Drama'},
	{id: 10751, name: 'Family'},
	{id: 14, name: 'Fantasy'},
	{id: 36, name: 'History'},
	{id: 27, name: 'Horror'},
	{id: 10402, name: 'Music'},
	{id: 9648, name: 'Mystery'},
	{id: 10749, name: 'Romance'},
	{id: 878, name: 'Science Fiction'},
	{id: 10770, name: 'TV Movie'},
	{id: 53, name: 'Thriller'},
	{id: 10752, name: 'War'},
	{id: 37, name: 'Western'}
];

export const THUMBNAIL_URL = 'https://image.tmdb.org/t/p/original';
