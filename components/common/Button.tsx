import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonStyle: string;
    buttonSize: string;
    className?: string;
    type: "button" | "submit" | "reset";
}

const STYLES: string[] = [
    "button",
    "button--circle",
    "button--header",
    "button--social",
];

const SIZES: string[] = [
    "button--social",
    "button--circleSize",
    "button--extraSm",
    "button--sm",
    "button--base",
    "button--md",
    "button--xl",
    "button--2xl",
];

export const Button: React.FC<ButtonProps> = ({
    buttonStyle,
    buttonSize,
    className,
    type = "button",
    children,
    ...props
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[2];

    return (
        <button
            className={classNames(
                `button ${checkButtonStyle} ${checkButtonSize}`,
                className,
            )}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
};
