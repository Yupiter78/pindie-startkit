import React from "react";
import styles from "@/components/cardList/CardsList.module.css";

const CardsListFragment = ({ item }) => {
    return (
        <li className={styles["cards-list__item"]}>
            <a href="/game-id.html" className={styles["card-list__link"]}>
                <article className={styles.card}>
                    <img
                        src={item.imgUrl}
                        alt=""
                        className={styles["card__image"]}
                    />
                    <div className={styles["card__content-block"]}>
                        <h3 className={styles["card__title"]}>{item.title}</h3>
                        <p className={styles["card__description"]}>
                            {item.description}
                        </p>
                        <div className={styles["card__info-container"]}>
                            <p className={styles["card__author"]}>
                                Автор:{" "}
                                <span className={styles["card__accent"]}>
                                    {item.author}
                                </span>
                            </p>
                            <p className={styles["card__votes"]}>
                                Голосов на сайте:{" "}
                                <span className={styles["card__accent"]}>
                                    {item.votes}
                                </span>
                            </p>
                        </div>
                    </div>
                </article>
            </a>
        </li>
    );
};

export default CardsListFragment;
