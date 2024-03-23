"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import _ from "lodash";
import Avatar from "@/app/components/Avatar/Avatar";
import LoginForm from "@/app/components/LoginForm/LoginForm";
import api from "../../data/data-utils";

const Header = () => {
    const [popupIsOpened, setPopupIsOpened] = useState(false);
    const storedUser = localStorage.getItem("currentUser");
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, [storedUser]);
    const pathname = usePathname();
    const history = useRouter();
    const openPopup = () => {
        setPopupIsOpened(true);
    };
    const closePopup = () => {
        setPopupIsOpened(false);
    };
    const handleOut = () => {
        setCurrentUser(null);
        api.deleteCurrentUser();
        history.replace("/");
    };

    const logoContent = (
        <img
            className={styles.logo__image}
            src="/images/logo.svg"
            alt="Логотип Pindie"
        />
    );

    return (
        <header className={styles.header}>
            {pathname === "/" ? (
                <div className={styles.logo}>{logoContent}</div>
            ) : (
                <Link href="/" className={styles.logo}>
                    {logoContent}
                </Link>
            )}

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
                    {!_.isEmpty(currentUser) ? (
                        <Avatar currentUser={currentUser} onOut={handleOut} />
                    ) : (
                        <button
                            className={styles.auth__button}
                            onClick={openPopup}
                        >
                            Войти
                        </button>
                    )}
                </div>
            </nav>
            <Overlay isOpened={popupIsOpened} close={closePopup} />
            <Popup isOpened={popupIsOpened} close={closePopup}>
                <LoginForm onClosePopup={closePopup} />
            </Popup>
        </header>
    );
};

export default Header;
