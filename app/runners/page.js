import React from "react";

import api from "@/app/data/data-utils";
import CardsList from "@/app/components/CardList/CardsList";

export default function Runners() {
    return (
        <main className="main">
            <CardsList id="runners" title="Раннеры" category="runner" />
        </main>
    );
}
