import React from "react";

import { Accordion, Button } from "../common";

import { Faq, faqs } from "./data";

import styles from "./FAQs.module.scss";

export const FAQs: React.FC = () => {
    const faqsDescription = faqs.map((faq: Faq) => (
        <Accordion key={faq.id} title={faq.title} content={faq.content} />
    ));

    return (
        <section className={styles.faq}>
            <div className="container">
                <div className={styles.faqInner}>
                    <div className={styles.faqItem}>
                        <h2>Ready to get started?</h2>
                        <p>
                            When pattern is mentioned in interior design, it is
                            easy to associate it with a geometric patterned
                            wallpaper or colourful prints on interior fabrics.
                        </p>
                        <Button
                            buttonSize="button--md"
                            buttonStyle="button"
                            type="button"
                        >
                            contact us
                        </Button>
                    </div>
                    <div className={styles.faqItem}>{faqsDescription}</div>
                </div>
            </div>
        </section>
    );
};
