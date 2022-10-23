import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Input } from "../../common";
import { loginFormSchema } from "./validation";

import styles from "./LoginForm.module.scss";

interface UserProps {
    login: string;
    email: string;
}

export const LoginForm: React.FC = () => {
    const methods = useForm<UserProps>({
        resolver: yupResolver(loginFormSchema),
    });

    const { handleSubmit, reset } = methods;

    const onSubmit = (data: UserProps) => {
        console.log("Data: ", data);
        reset();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.login}>
                <Input
                    name="name"
                    type="text"
                    inputSize="input--base"
                    placeholder="Name"
                    className={styles.loginInput}
                />
                <Input
                    name="email"
                    type="email"
                    inputSize="input--base"
                    placeholder="Email"
                    className={styles.loginInput}
                />
                <Button
                    buttonStyle="button"
                    buttonSize="button--xl"
                    type="submit"
                    className={styles.loginButton}
                >
                    book a demo
                </Button>
            </form>
        </FormProvider>
    );
};
