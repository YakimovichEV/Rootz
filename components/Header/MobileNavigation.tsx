import React, { useState } from "react";

import { Button } from "../common";
import { NavLinks } from "./NavLinks";

import styles from "./Header.module.scss";

interface MobileNavigationProps {
    isOpen: boolean;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
    isOpen,
}) => {
    return (
        <nav className={`${styles.headerMenu} ${styles.mobile}`}>
            {isOpen && (
                <>
                    <NavLinks />
                    <Button
                        buttonSize="button--2xl"
                        buttonStyle="button--header"
                        type="button"
                    >
                        Apply
                    </Button>
                </>
            )}
        </nav>
    );
};
