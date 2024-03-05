import React from "react";
import CardsListFragment from "@/components/cardList/CardsListFragment";
import styles from "@/components/cardList/CardsList.module.css";

const NewCardsList = () => {
    const dataNewCard = [
        {
            imgUrl: "https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg",
            title: "Go Away",
            description:
                "Управляй автомобилем, избегая аварий и перепрыгивая препятствия на пути к следующему уровню.",
            author: "Mahisto",
            votes: 20
        },
        {
            imgUrl: "https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png",
            title: "G.U.N.N.E.R.",
            description:
                "Продержись как можно дольше, отбиваясь от врагов, которых будет становиться всё больше.",
            author: "IDKWIAm",
            votes: 10
        },
        {
            imgUrl: "https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png",
            title: "Space Terror",
            description:
                "Лети как можно дальше в космическом пространстве, уничтожая всё на своём пути.",
            author: "IDKWIAm",
            votes: 20
        },
        {
            imgUrl: "https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png",
            title: "Square Slayer",
            description:
                "Уворачивайся и отстреливайся от озлобленных квадратов и собирай жизни для перехода на следующий уровень.",
            author: "niclan",
            votes: 10
        }
    ];
    return (
        <section className={styles["list-section"]}>
            <h2 className={styles["list-section__title"]} id="new">
                Новинки
            </h2>
            <ul className={styles["cards-list"]}>
                {dataNewCard.map((item, i) => (
                    <CardsListFragment key={i} {...{ item }} />
                ))}
            </ul>
        </section>
    );
};

export default NewCardsList;
