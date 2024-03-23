import React from "react";
import PropTypes from "prop-types";
import api from "@/app/data/data-utils";
import GameDisplay from "@/app/components/GameDisplay/GameDisplay";
import NotFound from "@/app/components/NotFound/NotFound";

export default function GamePage(props) {
    console.log("Game Page");
    const { params } = props;
    const { id } = params;
    const game = api.getGameById(id);
    console.log("__GAME__: ", game);

    return game ? <GameDisplay gameId={id} /> : <NotFound />;
}

GamePage.propTypes = {
    params: PropTypes.object
};
