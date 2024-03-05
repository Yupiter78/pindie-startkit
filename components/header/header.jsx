
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                <img className={styles["logo__image"]} src="/images/logo.svg" alt="Логотип Pindie" />
            </a>
            <nav className={styles.menu}>
                <ul className={styles["menu__list"]}>
                    <li className={styles["menu__item"]}>
                        <a href="" className={styles["menu__link"]}>Новинки</a>
                    </li>
                    <li className={styles["menu__item"]}>
                        <a href="" className={styles["menu__link"]}>Популярные</a>
                    </li>
                    <li className={styles["menu__item"]}>
                        <a href="" className={styles["menu__link"]}>Шутеры</a>
                    </li>
                    <li className={styles["menu__item"]}>
                        <a href="" className={styles["menu__link"]}>Раннеры</a>
                    </li>
                    <li className={styles["menu__item"]}>
                        <a href="" className={styles["menu__link"]}>Пиксельные</a>
                    </li>
                    <li className={styles["menu__item"]}>
                        <a href="" className={styles["menu__link"]}>TDS</a>
                    </li>
                </ul>
                <div className={styles.auth}>
                    <button className={styles["auth__button"]}>Войти</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;