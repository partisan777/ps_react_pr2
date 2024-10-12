import { ButtonHTMLAttributes, ReactNode, } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string | undefined
    styles: string | undefined
};
