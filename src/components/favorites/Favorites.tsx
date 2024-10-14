import favoriteStyles from './Favorites.module.css';
import cn from 'classnames';
import { Image } from '../image/Image';
import { useState } from 'react';
import { FavoritesProps } from './interfaces';

export const Favorites = ({isFavorites}: FavoritesProps) => {

  const [favorite, setFavorite] = useState(isFavorites);

  return (
    <>
      <div className={favorite ? cn(favoriteStyles['favorites'], favoriteStyles['in-favorites__color'])  : cn(favoriteStyles['favorites'], favoriteStyles['out-favorites__color'])
          }>
        <Image
          styles={favoriteStyles['favorites__icon'] } image={favorite ? '#assets/in-favorites.svg' :  '#assets/out-favorites.svg' }
          alt={favorite ? 'out_favorites' : 'in_favorites'
        }/>
        {favorite ? 'В избраном' : 'В избранное'}
      </div>
    </>
  );
};
