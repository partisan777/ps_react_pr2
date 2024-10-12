import { Label } from '../label/Label';
import { Input } from '../input/Input';
import { Button } from '../button/Button';
import SigninFormStyles from './SigninForm.module.css';
import cn from 'classnames';
import { useContext, useRef, FormEvent } from 'react';
import { UserContext } from '../context/UserContext';
import { UserContextData } from '../context/interfaces';
import { FormProps } from './interfaces';


export const SigninForm = (props: FormProps) => {
    const { styles } = props;
    const loginRef = useRef<HTMLInputElement | null>(null);
    const { setAuthUser } = useContext<UserContextData>(UserContext);

    const onSubmitSignin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!loginRef.current || !loginRef.current.value) {
            return;
        }
        const value = loginRef.current.value;
        setAuthUser({ login: value, isLogged: true , type: 'signin'});
        loginRef.current.value = '';
    };

    return (
        <form className={cn(SigninFormStyles['signin-form'], styles)} onSubmit={onSubmitSignin} >
            <div>
                <Label text={'Вход'} styles={SigninFormStyles['signin-form__label']}/>
            </div>
            <div>
                <Input styles={SigninFormStyles['signin-form__input']} placeHolder={'Ваше имя'} ref={loginRef} />
            </div>
            <div>
                <Button text={'Войти в профиль'} styles={SigninFormStyles['signin-form__button']} />
            </div>
        </form>
    );
};
