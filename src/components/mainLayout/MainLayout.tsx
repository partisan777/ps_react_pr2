import mainLayoutStyles from './MainLayout.module.css';
import { useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Header } from '../header/Header';
import { MainPage } from '../../pages/mainPage/MainPage'
import {UserContextData } from '../context/interfaces'


export function MainLayout() {

  const { setLogin, usersData } = useContext<UserContextData>(UserContext);

  useEffect(() => {
    setLogin(usersData.users?.filter(el => el.isLogged === true)[0]?.login);
	}, []);

  return (
    <div className={mainLayoutStyles['main-layout']}>
      <Header />
      <MainPage />
     </div>
  );
};
