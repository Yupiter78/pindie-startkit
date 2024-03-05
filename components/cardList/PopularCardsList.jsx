import React from "react";
import styles from "@/components/cardList/CardsList.module.css";
import CardsListFragment from "@/components/cardList/CardsListFragment";

const PopularCardsList = () => {
    const dataPopularCard = [
        {
            imgUrl: "https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png",
            title: "Crystal Kepper",
            description:
                "Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней.",
            author: "Lonely Baobab",
            votes: 20
        },
        {
            imgUrl: "https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png",
            title: "Dangeons'n'Caves. Prologue",
            description:
                "Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе.",
            author: "F-Style",
            votes: 10
        },
        {
            imgUrl: "https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png",
            title: "Defence of Crystal",
            description:
                "Защищай магический кристалл от монстров и уничтожай кладбища, чтобы спасти Землю, которую поглотил мрак.",
            author: "MastWe",
            votes: 20
        }
    ];
    return (
        <section className={styles["list-section"]}>
            <h2 className={styles["list-section__title"]} id="popular">
                Популярное
            </h2>
            <ul className={styles["cards-list"]}>
                {dataPopularCard.map((item, i) => (
                    <CardsListFragment key={i} {...{ item }} />
                ))}
            </ul>
        </section>
    );
};

export default PopularCardsList;
