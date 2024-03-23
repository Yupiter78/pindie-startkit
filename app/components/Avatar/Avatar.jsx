import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Styles from "./Avatar.module.css";

const Avatar = ({ currentUser, onOut }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleAvatarClick = () => {
        setMenuOpen((prevState) => !prevState);
    };

    return (
        <div className={Styles.dropdown}>
            <div className={Styles.avatar_box} onClick={handleAvatarClick}>
                <img
                    src={currentUser.avatar}
                    alt="Avatar"
                    className={Styles.avatar}
                />
                <strong className={Styles.title}>{currentUser.username}</strong>
                {menuOpen && (
                    <ul className={Styles["dropdown-menu"]}>
                        <li>
                            {currentUser.role === "user" && (
                                <Link
                                    href="/user-cabinet"
                                    className={Styles["dropdown-item"]}
                                    role="button"
                                >
                                    Личный кабинет пользователя
                                </Link>
                            )}
                            {currentUser.role === "admin" && (
                                <Link
                                    href="/admin-cabinet"
                                    className={Styles["dropdown-item"]}
                                    role="button"
                                >
                                    Панель администратора
                                </Link>
                            )}
                        </li>
                        <li>
                            <hr className={Styles["dropdown-divider"]} />
                        </li>
                        <li>
                            <a
                                className={Styles["dropdown-item"]}
                                role="button"
                                onClick={onOut}
                            >
                                Sign out
                            </a>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

Avatar.propTypes = {
    currentUser: PropTypes.object,
    onOut: PropTypes.func
};

export default Avatar;
