import React, { useState } from "react";

import { Button } from "../index";

import styles from "./Accordion.module.scss";

interface AccordionProps {
    title: string;
    content: string;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const isActiveHandler = () => {
        setIsActive((prevState) => !prevState);
    };

    return (
        <>
            <div className={styles.accordion}>
                <h3>{title}</h3>
                <Button
                    buttonSize="button--circleSize"
                    buttonStyle="button--circle"
                    type="button"
                    onClick={isActiveHandler}
                >
                    {isActive ? "-" : "+"}
                </Button>
            </div>
            {isActive && <p className={styles.content}>{content}</p>}
        </>
    );
};
