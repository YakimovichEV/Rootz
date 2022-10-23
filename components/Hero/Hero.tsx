import React from "react";

import { Parrot } from "./Parrot";
import { HeroIcon } from "./Icon";
import { Search } from "../common";
import { Header } from "../Header/Header";

import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <Header />

            <div className="container">
                <div className={styles.heroInner}>
                    <div className={styles.heroItem}>
                        <h2>
                            Nature <br /> needs you
                        </h2>
                        <p>
                            The scale of the challenges facing our planet can
                            seem <br /> daunting, but we can all do something.
                        </p>
                        <Search />
                    </div>
                    <div className={styles.heroItem}>
                        <Parrot />

                        <div className={styles.heroCard}>
                            <HeroIcon className={styles.heroIcon} />
                            <div>
                                <span>Members</span>
                                <span>29 128</span>
                            </div>
                            <div className={styles.heroOrange}></div>
                            <div className={styles.heroBlue}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
