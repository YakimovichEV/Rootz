import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";

import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import styles from "./Header.module.scss";

import logo from "../../public/images/logo.png";

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const headerRef = useRef<HTMLElement>(null);

    const isOpenHandler = () => setIsOpen((prevState) => !prevState);

    useOnClickOutside(headerRef, () => setIsOpen(false));

    return (
        <header ref={headerRef} className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerInner}>
                    <div className={styles.headerItem}>
                        <Link href="/" passHref>
                            <>
                                <Image src={logo} width={37} height={38} />
                                <span className={styles.headerLogo}>Rootz</span>
                            </>
                        </Link>
                    </div>
                    <div className={styles.headerItem}>
                        {isOpen ? (
                            <MdClose
                                size={22}
                                color="black"
                                onClick={isOpenHandler}
                                className={styles.headerIcon}
                            />
                        ) : (
                            <CgMenuRightAlt
                                size={22}
                                color="black"
                                onClick={isOpenHandler}
                                className={styles.headerIcon}
                            />
                        )}
                        <Navigation />
                    </div>
                </div>
                <MobileNavigation isOpen={isOpen} />
            </div>
        </header>
    );
};
