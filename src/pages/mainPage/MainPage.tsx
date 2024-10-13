import mainPageStyles from './MainPage.module.css';
import { FilmCardList } from '../../components/filmCardList/FilmCardList';
import { FormEvent } from 'react';
import { SearchPanel } from '../../components/searchPanel/SearcPanel';
import { FILMS } from '../../_mockFilmData/_mockFilmData';

export function MainPage (props: unknown) {
    const onSubmitSearcForm = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    };

  return (
    <>
      <SearchPanel styles={mainPageStyles['main-page__search-panel']}  onSubmit={onSubmitSearcForm} />
      <FilmCardList styles={mainPageStyles['main-page__film-list-container']} films={FILMS}/>
    </>
  );
};
