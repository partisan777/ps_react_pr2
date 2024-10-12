import linkStyles from './Link.module.css';
import cn from 'classnames';
import { LinkProps } from './interfaces';

export const Link = ({href, text, styles, onClick}: LinkProps) => {

  return (
    <a className={cn(styles, linkStyles['link'])} href={href} onClick={onClick}>{text}</a>
  );
};
