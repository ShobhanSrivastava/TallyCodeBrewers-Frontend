import { useContext } from "react";
import { DifficultySelector, DurationSelector, Stats, Clock, Typing } from "../components";
import { PlayerContext } from "../context";

function SinglePlayerPlay() {
    const { playerData, dispatch } = useContext(PlayerContext);

    return (
        <>
            <DifficultySelector playerData={playerData} dispatch={dispatch} />
            <DurationSelector playerData={playerData} dispatch={dispatch} />
            <Clock time={playerData.duration} />
            <Stats playerData={playerData} />
            <Typing />
        </>
    )
}

export default SinglePlayerPlay;