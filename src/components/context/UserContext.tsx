import { createContext, ReactNode } from 'react';
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { setAuthUserStorage } from '../utils/setAuthUserStorage';
import { UserContextProviderProps, LoginData, UserData, UserContextData } from '../context/interfaces';
import { PageData } from '../hooks/interface';

export const UserContext = createContext<UserContextData>({
	login: '',
	setLogin: (login: string) => {},
	setAuthUser: (loginData: LoginData) => {},
	usersData: {users: []}
});

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [login, setLogin] = useState<string>('');
	const [usersData, setUsersData] = useLocalStorage('pageData');

	const setAuthUser = (loginData: LoginData): void => {
		const temp = usersData as PageData;
		const state = setAuthUserStorage(loginData, temp);
		setUsersData(state);
		setLogin(temp.users?.filter(el => el.isLogged === true)[0]?.login);
	};

	return (
		<UserContext.Provider value={{ login, setLogin, setAuthUser, usersData }}>
			{children}
		</UserContext.Provider>
	);
};
