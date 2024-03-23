"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import Styles from "@/app/components/GameDisplay/GameDisplay.module.css";
import api from "../../data/data-utils";
import _ from "lodash";
import { Popup } from "@/app/components/Popup/Popup";
import { Overlay } from "@/app/components/Overlay/Overlay";

const GameDisplay = ({ gameId }) => {
    const [popupIsOpened, setPopupIsOpened] = useState(false);
    const game = api.getGameById(gameId);
    const [voice, setVoice] = useState(game.users.length);
    const getCookies = (name) => {
        const foundCookie = document.cookie.split("; ").find((row) => {
            const index = row.indexOf("=");
            if (index !== -1) {
                const cookieName = row.slice(0, index).trim();
                if (cookieName === name) {
                    return row;
                }
            }
            return false;
        });

        return foundCookie
            ? foundCookie.slice(foundCookie.indexOf("=") + 1)
            : null;
    };

    const currentUserCookies = getCookies("currentUser");

    const currentUser = currentUserCookies
        ? JSON.parse(currentUserCookies)
        : null;

    const history = useRouter();

    const openPopup = () => {
        setPopupIsOpened(true);
    };
    const closePopup = () => {
        setPopupIsOpened(false);
    };

    const handleAddVoice = () => {
        if (currentUser) {
            const foundVoiceUser = game.users.find(
                (user) => user.id === currentUser.id
            );
            if (foundVoiceUser) {
                openPopup();
                return;
            }
            api.updateGames(gameId, {
                id: currentUser.id,
                username: currentUser.username,
                email: currentUser.email
            });
            setVoice((prevState) => prevState + 1);
        } else {
            history.replace("/login");
        }
    };
    return (
        !_.isEmpty(game) && (
            <main className="main">
                <section className={Styles.game}>
                    <iframe
                        className={Styles.game__iframe}
                        src={game.link}
                    ></iframe>
                </section>
                <section className={Styles.about}>
                    <h2 className={Styles.about__title}>{game.title}</h2>
                    <div className={Styles.about__content}>
                        <p className={Styles.about__description}>
                            {game.description}
                        </p>
                        <div className={Styles.about__author}>
                            <p>
                                Автор:
                                <span className={Styles.about__accent}>
                                    {game.developer}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={Styles.about__vote}>
                        <p className={Styles["about__vote-amount"]}>
                            За игру уже проголосовали:
                            <span className={Styles.about__accent}>
                                {voice}
                            </span>
                        </p>
                        <button
                            className={`button ${Styles["about__vote-button"]}`}
                            onClick={() => handleAddVoice(game.id)}
                        >
                            Голосовать
                        </button>
                    </div>
                </section>
                <Overlay isOpened={popupIsOpened} close={closePopup} />
                <Popup isOpened={popupIsOpened} close={closePopup}>
                    <div className={Styles["box-message"]}>
                        <p className={Styles.message}>Вы уже голосовали.</p>
                        <p className={Styles.message}>Ваш голос учтен!</p>
                    </div>
                </Popup>
            </main>
        )
    );
};

GameDisplay.propTypes = {
    gameId: PropTypes.string
};

export default GameDisplay;
