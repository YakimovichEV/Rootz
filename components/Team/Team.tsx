import Image from "next/image";
import React from "react";

import styles from "./Team.module.scss";

import person1 from "../../public/images/team/team_01.png";
import person2 from "../../public/images/team/team_02.png";
import person3 from "../../public/images/team/team_03.png";

export const Team: React.FC = () => {
    return (
        <section className={styles.team}>
            <div className="container">
                <h2>Our Top Team</h2>
                <p>
                    Learn more about how you can save <br /> our planet's
                    nature.
                </p>

                <div className={styles.teamInner}>
                    <div className={styles.teamItem}>
                        <Image src={person1} />
                    </div>
                    <div className={styles.teamItem}>
                        <Image src={person2} />
                    </div>
                    <div className={styles.teamItem}>
                        <Image src={person3} />
                    </div>
                </div>
            </div>
        </section>
    );
};
