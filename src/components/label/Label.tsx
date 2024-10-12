import { LabelProps } from './interfaces';
import labelStyles from './Label.module.css';
import cn from 'classnames';

export function Label({text, styles}: LabelProps) {

  return (
    <h1 className={cn(styles, labelStyles['label'])}>{text}</h1>
  );
};
