import filmCardListStyles from './FilmCardList.module.css';
import { FilmCardItem } from '../filmCardItem/FilmCardItem';
import { FILMS } from '../../_mockFilmData/_mockFilmData';
import cn from 'classnames';
import { FilmCardListProps } from './interfaces';

export const FilmCardList = ({styles}: FilmCardListProps) =>{

  return(
    <>
      <div className={cn(styles, filmCardListStyles['film-card-list'])}>
        {FILMS.map((item) => <FilmCardItem key={item.id} text={item.name} isFavorites={item.favorites} image={item.image} count={item.rating} />)}
      </div>
    </>
  );
};
