import {useEffect, useState} from 'react';

export function useAsyncFunction<T>(
	asyncFunction: () => Promise<T>,
	defaultValue: T
): [T, string | null, boolean] {
	const [state, setState] = useState({
		value: defaultValue,
		error: null,
		isPending: true
	});

	useEffect(() => {
		asyncFunction()
			.then((value) => setState({value, error: null, isPending: false}))
			.catch((error) =>
				setState({
					value: defaultValue,
					error: error.toString(),
					isPending: false
				})
			);
	}, [asyncFunction, defaultValue]);

	const {value, error, isPending} = state;
	return [value, error, isPending];
}
