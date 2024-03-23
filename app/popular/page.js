import React from "react";

import api from "@/app/data/data-utils";
import CardsList from "@/app/components/CardList/CardsList";

export default function Popular() {
    return (
        <main className="main">
            <CardsList id="popular" title="Популярное" category="popular" />
        </main>
    );
}
