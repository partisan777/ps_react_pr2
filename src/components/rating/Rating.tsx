import ratingStyles from './Rating.module.css';
import { Image } from '../image/Image.jsx';
import cn from 'classnames';
import { RatingProps } from './interfaces';

export const Rating = ({styles, count}: RatingProps) => {

  return (
    <div className={cn(styles, ratingStyles['rating-container'])}>
      <Image image={'#assets/rating.svg'} styles={ratingStyles['rating-container__image']} alt={''}/>
      <div className={ratingStyles['rating-container__font']}>
        {count}
      </div>
    </div>
  );

};
