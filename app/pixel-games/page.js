import React from "react";

import CardsList from "@/app/components/CardList/CardsList";

export default function PixelGames() {
    return (
        <main className="main-inner">
            <CardsList id="pixel" title="Пиксельные игры" category="pixel" />
        </main>
    );
}
