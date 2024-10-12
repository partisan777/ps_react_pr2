import mainPageStyles from './MainPage.module.css';
import { Button } from '../../components/button/Button';
import { Label } from '../../components/label/Label';
import { Paragraph } from '../../components/paragraph/Paragraph';
import { Input } from '../../components/input/Input';
import { Image } from '../../components/image/Image';
import { FilmCardList } from '../../components/filmCardList/FilmCardList';
import { SigninForm } from '../../components/signinForm/SigninForm';
import { MouseEvent, useContext } from 'react';
import { UserContext } from '../../components/context/UserContext';
import { UserContextData } from '../../components/context/interfaces';


export function MainPage (props: unknown) {
    const { login } = useContext<UserContextData>(UserContext);
    const onClick = (e: MouseEvent) => {
      e.preventDefault();
    };

  return (
    <>
      <div className={mainPageStyles['main-page__label__container']}>
        <Label text={'Поиск'}  styles={''} />
        <Paragraph text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'  styles={''} />
      </div>
      <div className={mainPageStyles['main-page__search-container']}>
        <div className={mainPageStyles['main-page__input__container']}>
          <Image styles={mainPageStyles['main-page__input__container_icon']} image='##/hug.svg' alt={'hug'} />
          <Input placeHolder={'Введите название'} styles={''}/>
        </div>
        <Button text='Искать' styles={''} onClick={onClick} />
      </div>
      <FilmCardList styles={mainPageStyles['main-page__film-list-container']} />
      <div className={mainPageStyles['main-page__signin-form']}>
        {login ?
          ''
          :
          <SigninForm styles={''} />
        }
      </div>
    </>
  );
};
