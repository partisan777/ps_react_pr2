import { forwardRef } from 'react';
import inputStyles from  './Input.module.css';
import cn from 'classnames';
import { InputProps, Ref } from './interfaces';

export const Input = forwardRef<Ref, InputProps>(function Input (props, ref) {
    const {styles, placeHolder, ...otherProps } = props;
    return (
        <input className={cn(styles, inputStyles['input'])} placeholder={placeHolder} ref={ref} {...otherProps} />
    );
});
