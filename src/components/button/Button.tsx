import buttonStyles from './Button.module.css';
import cn from 'classnames';
import {ButtonProps} from '../button/interfaces'

export function Button({text, styles, onClick}: ButtonProps) {

  return (
    <button onClick={onClick} className={cn(styles, buttonStyles['button'])}>{text}</button>
  );
};
