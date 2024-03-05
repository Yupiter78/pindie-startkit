import React from 'react';
import styles from "./Promo.module.css";

const Promo = () => {
    return (
        <section className={styles.promo}>
            <div className={styles["promo__description-block"]}>
                <h2 className={styles["promo__title"]}>Твой промокод</h2>
                <p className={styles["promo__description"]}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
                <button className={styles["button promo__button"]}>Получить код</button>
            </div>
            <img src="/images/promo-illustration.svg" alt="Собака" className={styles["promo__image"]}/>
        </section>
    );
};

export default Promo;