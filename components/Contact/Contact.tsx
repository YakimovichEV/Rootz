import React from "react";

import { LoginForm } from "../index";

import styles from "./Contact.module.scss";

export const Contact: React.FC = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.contactContainer}>
                <div className={styles.contactInner}>
                    <div className={styles.contactItem}>
                        <h2>Get started today</h2>
                        <p>
                            Learn more about how you can save our planet's
                            nature. From smart consumption to switching to
                            renewable energy, each of us can do our part to save
                            the planet.
                        </p>
                    </div>
                    <div className={styles.contactItem}>
                        <div className={styles.contactOrange} />
                        <div className={styles.contactBlue} />
                        <h2>Log in</h2>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </section>
    );
};
