import React from "react";
import Banner from "@/app/components/Banner/Banner";
import Promo from "@/app/components/Promo/Promo";

import CardsList from "@/app/components/CardList/CardsList";

export default function Home() {
    return (
        <main className="main">
            <Banner />
            <CardsList id="popular" title="Популярное" category="popular" />
            <CardsList id="new" title="Новинки" category="new" />
            <Promo />
        </main>
    );
}
