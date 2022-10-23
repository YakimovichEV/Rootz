import React, { InputHTMLAttributes } from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    className?: string;
    placeholder?: string;
    inputSize: string;
    options?: Parameters<ReturnType<typeof useFormContext>["register"]>[1];
}

const SIZES: string[] = ["input--sm", "input--base", "input--md", "input--xl"];

export const Input: React.FC<InputProps> = ({
    name,
    label,
    className,
    placeholder,
    inputSize,
    type,
    options,
    ...props
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const checkButtonSize = SIZES.includes(inputSize) ? inputSize : SIZES[0];

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                {...register(name, options)}
                type={type}
                className={classNames(`input ${checkButtonSize}`, className)}
                placeholder={placeholder}
                {...props}
            />
            {errors[name] && errors[name]?.message && (
                <div className="input__error">
                    {errors[name]?.message as string}
                </div>
            )}
        </>
    );
};
