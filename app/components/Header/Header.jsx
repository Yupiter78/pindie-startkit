"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import Link from "next/link";

const Header = () => {
    const [popupIsOpened, setPopupIsOpened] = useState(false);
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
                        <Link href="" className={styles.menu__link}>
                            Новинки
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link href="" className={styles.menu__link}>
                            Популярные
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link href="" className={styles.menu__link}>
                            Шутеры
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link href="" className={styles.menu__link}>
                            Раннеры
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link href="" className={styles.menu__link}>
                            Пиксельные
                        </Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link href="" className={styles.menu__link}>
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
                <AuthForm />
            </Popup>
        </header>
    );
};

export default Header;
