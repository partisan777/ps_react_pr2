import { Button } from "../button/Button";
import { Image } from "../image/Image";
import { Input } from "../input/Input";
import { Label } from "../label/Label";
import { Paragraph } from "../paragraph/Paragraph";
import { SearchFormProps } from "./interfaces";
import cn from 'classnames';
import SearchPanelStyles from './SearchPanel.module.css';


export function SearchPanel ({styles, onSubmit}: SearchFormProps) {

  return (
    <form  className={cn(styles, SearchPanelStyles['search-panel__container'])} onSubmit={onSubmit} >
        <div className={SearchPanelStyles['search-panel__label__container']} >
            <Label text={'Поиск'}  styles={''} />
            <Paragraph text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'  styles={''} />
        </div>
        <div className={SearchPanelStyles['search-panel__search-container']}>
            <div className={SearchPanelStyles['search-panel__input__container']}>
                <Image styles={SearchPanelStyles['search-panel__input__container_icon']} image='##/hug.svg' alt={'hug'} />
                <Input placeHolder={'Введите название'} styles={''}/>
            </div>
            <Button text='Искать' styles={''} />
        </div>
    </form>

  );
};
