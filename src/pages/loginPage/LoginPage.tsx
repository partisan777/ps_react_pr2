import { useContext } from "react";
import { UserContext } from "../../components/context/UserContext";
import { UserContextData } from "../../components/context/interfaces";
import { SigninForm } from "../../components/signinForm/SigninForm";
import loginPageStyles from './LoginPage.module.css';

export function LoginPage (props: unknown) {
    const { login } = useContext<UserContextData>(UserContext);

    return (
        <>
          <div className={loginPageStyles['main-page__signin-form']}>
            {login ? '' : <SigninForm styles={''} />}
          </div>
        </>
    );
};
