import { ReactNode } from 'react';
import { PageData } from '../hooks/interface';

export interface UserContextProviderProps {
	children: ReactNode;
};

export interface LoginData {
    login: string,
    isLogged: boolean
    type: 'signin' | 'signout'
};

export interface UserData {
    login: string,
    isLogged: boolean
};

export interface UserContextData {
    login: string,
    setLogin: (login: string) => void,
    setAuthUser: (loginData: LoginData) => void,
    usersData: PageData
};
