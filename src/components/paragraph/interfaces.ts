import { ComponentPropsWithoutRef } from 'react';

export interface ParagraphProps extends ComponentPropsWithoutRef<"p"> {
    text: string;
    styles: string;
};
