import headerStyles from './Header.module.css';
import { Image } from '../image/Image';
import { Link } from '../link/Link';
import { MouseEvent, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const Header = (props: unknown) => {
  const { login, setAuthUser } = useContext(UserContext);

  const onClickSignout = (e: MouseEvent) => {
      e.preventDefault();
      setAuthUser({ login: login, isLogged: false, type: 'signout'  });
  };

  return (
    <>
      <div className={headerStyles['navbar']}>
        <div>
          <Image styles={headerStyles['navbar__bookmark__image']} image='#assets/bookmark.svg' alt={'bookmark'} />
        </div>
        <div className={headerStyles['navbar__links']}>
          <div className={headerStyles['navbar__links__link']}>
            <NavLink to='/' className={({ isActive }) => cn(headerStyles['navbar__links__link'], {[headerStyles['active-link']]: isActive})}>Поиск фильмов</NavLink>
          </div>
          <div className={headerStyles['navbar__links__link']}>
            <NavLink to='/favorites' className={({ isActive }) => cn(headerStyles['navbar__links__link'], {[headerStyles['active-link']]: isActive})}>Мои фильмы</NavLink>
            <Image styles={''} image='#assets/circle.svg' alt={'circle'} />
          </div>
          <div className={headerStyles['navbar__links__link']} onClick={onClickSignout}>
            {login ?
              <>
                {login}
                <Link href={''} text={'Выйти'} onClick={(e: MouseEvent) => onClickSignout(e)} styles={''}/>
              </>
              :
              <NavLink to='/login' className={({ isActive }) => cn(headerStyles['navbar__links__link'], {[headerStyles['active-link']]: isActive})}>Войти</NavLink>
             }
            <Image styles={''} image='#assets/exit.svg' alt={'exit'} />
          </div>
        </div>
      </div>
    </>
  );
};
