"use client";

import React from "react";
import PropTypes from "prop-types";

export default function GamePage(props) {
    const { params } = props;
    console.log(params);
    return (
        <main className="main">
            <h1>Привет! Это страница {params.id}</h1>
        </main>
    );
}

GamePage.propTypes = {
    params: PropTypes.object
};
