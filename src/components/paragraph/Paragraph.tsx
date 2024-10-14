import { ParagraphProps } from './interfaces';
import paragraphStyles from './Paragraph.module.css';
import cn from 'classnames';

export function Paragraph({text, styles}: ParagraphProps ) {

    return (
        <p className={cn(styles, paragraphStyles['paragraph'])}>{text}</p>
    );
};
