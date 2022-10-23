import React from "react";

import { Button } from "../common";
import { NavLinks } from "./NavLinks";

import styles from "./Header.module.scss";

export const Navigation: React.FC = () => {
    return (
        <nav className={styles.headerMenu}>
            <NavLinks />

            <Button
                buttonSize="button--base"
                buttonStyle="button--header"
                type="button"
            >
                Apply
            </Button>
        </nav>
    );
};
