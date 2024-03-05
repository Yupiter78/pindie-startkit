
import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="/" className={styles["footer__logo"]}>
        <span className={styles["footer__logo-name"]}>pindie</span>
                <span className={styles["footer__logo-copy"]}>, XXI век</span>
            </a>
            <ul className={styles["social-list"]}>
                <li className={styles["social-list__item"]}>
                    <a href="" className={styles["button social-list__link"]}>YT</a>
                </li>
                <li className={styles["social-list__item"]}>
                    <a href="" className={styles["button social-list__link"]}>ВК</a>
                </li>
                <li className={styles["social-list__item"]}>
                    <a href="" className={styles["button social-list__link"]}>TG</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;