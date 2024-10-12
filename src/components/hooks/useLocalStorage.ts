import { useState, useEffect } from 'react';
import { PageData } from './interface';

export function useLocalStorage(key: string): [ PageData, (pageData: PageData) => void ] {
	const initialState: PageData = {users: []}
	const [data, setData] = useState(initialState);

	useEffect(() => {
		const res = localStorage.getItem(key);
		if (res) {
			setData(JSON.parse(res));
		};
	}, []);

	const saveData = (newData: PageData): void => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [ data, saveData ];
};

export default useLocalStorage;
