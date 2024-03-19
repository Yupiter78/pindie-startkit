"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
// import { AuthForm } from "../AuthForm/AuthForm";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RegisterForm from "@/app/components/RegisterForm/RegisterForm";

const Header = () => {
    const [popupIsOpened, setPopupIsOpened] = useState(false);
    const pathname = usePathname();
    const openPopup = () => {
        setPopupIsOpened(true);
    };
    const closePopup = () => {
        setPopupIsOpened(false);
    };

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <img
                    className={styles.logo__image}
                    src="/images/logo.svg"
                    alt="Логотип Pindie"
                />
            </Link>
            <nav className={styles.menu}>
                <ul className={styles.menu__list}>
                    <li className={styles.menu__item}>
                        <Link
                            href="/new"
                            className={`${styles.menu__link} ${
                                pathname === "/new"
                                    ? styles.menu__link_active
                                    : ""
                            }`}
                        >
                            Новинки
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link
                            href="/popular"
                            className={`${styles.menu__link} ${
                                pathname === "/popular"
                                    ? styles.menu__link_active
                                    : ""
                            }`}
                        >
                            Популярные
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link
                            href="/shooters"
                            className={`${styles.menu__link} ${
                                pathname === "/shooters"
                                    ? styles.menu__link_active
                                    : ""
                            }`}
                        >
                            Шутеры
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link
                            href="/runners"
                            className={`${styles.menu__link} ${
                                pathname === "/runners"
                                    ? styles.menu__link_active
                                    : ""
                            }`}
                        >
                            Раннеры
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link
                            href="/pixel-games"
                            className={`${styles.menu__link} ${
                                pathname === "/pixel-games"
                                    ? styles.menu__link_active
                                    : ""
                            }`}
                        >
                            Пиксельные
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link
                            href="/tds"
                            className={`${styles.menu__link} ${
                                pathname === "/tds"
                                    ? styles.menu__link_active
                                    : ""
                            }`}
                        >
                            TDS
                        </Link>
                    </li>
                </ul>
                <div className={styles.auth}>
                    <button className={styles.auth__button} onClick={openPopup}>
                        Войти
                    </button>
                </div>
            </nav>
            <Overlay isOpened={popupIsOpened} close={closePopup} />
            <Popup isOpened={popupIsOpened} close={closePopup}>
                <RegisterForm />
            </Popup>
        </header>
    );
};

export default Header;
