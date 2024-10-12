import { LoginData } from '../context/interfaces';
import { PageData } from '../hooks/interface';

export const setAuthUserStorage = (loginData: LoginData, storage: PageData): PageData => {
	const { login, type } = loginData;
		const newData = storage;
		if (newData.users) {
			newData.users.forEach(el => el.isLogged = false);
			if ( type === 'signin') {
				const idx = newData.users.findIndex(el => el.login === login);
				if (idx === -1) {
					newData.users.push({ login: login, isLogged: true });
				} else {
					newData.users[idx].isLogged = true;
				};
			}
		} else {
			newData.users = [loginData];
		};

    return newData;
};
