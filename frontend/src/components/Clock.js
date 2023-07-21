import { PlayerContext } from "../context";
import { useContext, useState, useEffect } from "react";

function Clock() {
    const { playerData, dispatch } = useContext(PlayerContext);

    const minutes = Math.floor(playerData.duration/60);
    const seconds = playerData.duration%60;

    return (
        <div className="clock">
            { minutes<10 ? '0' : '' }{minutes}:{ seconds < 10 ? '0' : '' }{seconds}
        </div>
    );
}

export default Clock;