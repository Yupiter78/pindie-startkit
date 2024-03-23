import React from "react";

import CardsList from "@/app/components/CardList/CardsList";

export default function New() {
    return (
        <main className="main-inner">
            <CardsList id="new" title="Новинки" category="new" />
        </main>
    );
}
