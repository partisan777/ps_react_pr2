import favoritesPageStyles from './FavoritesPage.module.css';
import { FilmCardList } from '../../components/filmCardList/FilmCardList';
import { FILMS } from '../../_mockFilmData/_mockFilmData';


export function FavoritesPage (props: unknown) {
  const favoritesFilms = FILMS.filter(el => el.favorites === true);

  return (
    <FilmCardList styles={favoritesPageStyles['favorites__film-list-container']} films={favoritesFilms}/>
  );
};
