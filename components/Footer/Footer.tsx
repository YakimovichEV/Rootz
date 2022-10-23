import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { Button } from "../common";

import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerInner}>
                    <div className={styles.footerItem}>
                        <h2>Contacts</h2>
                        <p>2019 Rootz Foundation</p>
                        <p>All right reserved</p>
                    </div>
                    <div className={styles.footerItem}>
                        <h3>Headquarters</h3>
                        <p>1234 Taliban</p>
                        <p>Los Angeles, La 1234567</p>
                        <p>
                            <a href="tel:+(123) 456-7890">(123) 456-7890</a>
                        </p>
                    </div>
                    <div className={styles.footerItem}>
                        <h3>Social media</h3>
                        <div>
                            <Button
                                buttonStyle="button--social"
                                buttonSize="button--social"
                                type="button"
                            >
                                <FaTwitter
                                    color="white"
                                    width={14}
                                    height={17}
                                />
                            </Button>
                            <Button
                                buttonStyle="button--social"
                                buttonSize="button--social"
                                type="button"
                            >
                                <FaFacebookF
                                    color="white"
                                    width={7}
                                    height={14}
                                />
                            </Button>
                            <Button
                                buttonStyle="button--social"
                                buttonSize="button--social"
                                type="button"
                            >
                                <FaLinkedinIn
                                    color="white"
                                    width={14}
                                    height={14}
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
