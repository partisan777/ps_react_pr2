import { InputHTMLAttributes } from 'react';

export interface InputProps extends  InputHTMLAttributes<HTMLInputElement> {
    styles: string
    placeHolder: string
}

export type Ref = HTMLInputElement;
