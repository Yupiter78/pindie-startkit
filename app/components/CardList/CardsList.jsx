"use client";
import React from "react";
import styles from "./CardsList.module.css";
import Card from "@/app/components/Card/Card";
import PropTypes from "prop-types";
import Link from "next/link";
import api from "../../data/data-utils";

const CardsList = ({ id, title, category }) => {
    const newData = api.getGamesByCategory(category);

    return (
        <section className={styles["list-section"]}>
            <h2 className={styles["list-section__title"]} id={id}>
                {title}
            </h2>
            <ul className={styles["cards-list"]}>
                {newData.map((item, i) => (
                    <li key={i} className={styles["cards-list__item"]}>
                        <Link
                            href={`games/${item.id}`}
                            className={styles["card-list__link"]}
                        >
                            <Card {...item} />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

CardsList.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string
};

export default CardsList;
