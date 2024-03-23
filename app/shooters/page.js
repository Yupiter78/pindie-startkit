import React from "react";

import CardsList from "@/app/components/CardList/CardsList";

export default function Shooters() {
    return (
        <main className="main">
            <CardsList id="shooters" title="Шутеры" category="shooter" />
        </main>
    );
}
