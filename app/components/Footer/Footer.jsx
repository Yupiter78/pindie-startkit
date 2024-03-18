import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="/" className={styles.footer__logo}>
                <span className={styles["footer__logo-name"]}>pindie</span>
                <span className={styles["footer__logo-copy"]}>, XXI век</span>
            </Link>
            <ul className={styles["social-list"]}>
                <li className={styles["social-list__item"]}>
                    <a
                        href=""
                        className={`button ${styles["social-list__link"]}`}
                    >
                        YT
                    </a>
                </li>
                <li className={styles["social-list__item"]}>
                    <a
                        href=""
                        className={`button ${styles["social-list__link"]}`}
                    >
                        ВК
                    </a>
                </li>
                <li className={styles["social-list__item"]}>
                    <a
                        href=""
                        className={`button ${styles["social-list__link"]}`}
                    >
                        TG
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
