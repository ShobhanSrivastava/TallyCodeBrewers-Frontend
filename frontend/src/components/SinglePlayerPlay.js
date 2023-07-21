import { useContext, useState, useEffect, useRef } from "react";
import { DifficultySelector, DurationSelector, Stats, Clock, Typing, SinglePlayerResult } from "../components";
import { PlayerContext, ThemeContext } from "../context";
import { calculateWPM } from "../utils/utilFunctions";
import { generate } from "../utils/words";

function SinglePlayerPlay() {
    let initialWords = generate();

    const { playerData, dispatch } = useContext(PlayerContext);

    const { theme } = useContext(ThemeContext);

    // TODO: Create useReducer to manage state. Remove useState
    const [wordCount, setWordCount] = useState(0);
    const [leftPadding, setLeftPadding] = useState(new Array(20).fill(' ').join(''));
    const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
    const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));
    const [typedChars, setTypedChars] = useState('');
    const [outgoingChars, setOutgoingChars] = useState('');

    const timeoutRef = useRef(null);

    useEffect(() => {
        if (playerData.isPlaying) {
          dispatch({ type: 'CHANGE_WPM', wpm: calculateWPM(playerData.gameStartTime, wordCount) });
      
          timeoutRef.current = setTimeout(() => {
            if (playerData.duration === 0) {
              clearTimeout(timeoutRef.current);
              dispatch({ type: 'TOGGLE_PLAYING' });
              dispatch({ type: 'TOGGLE_GAME_ENDED' });
            } else {
              // Check if the duration is greater than 0 before updating it
              dispatch({ type: 'CHANGE_DURATION', duration: playerData.duration - 1 });
            }
          }, 1000);
        }

        return () => {
          clearTimeout(timeoutRef.current);
        }
      }, [playerData.isPlaying, playerData.duration]);

    function handleButtonClick() {
        initialWords = generate();
        clearTimeout(timeoutRef.current);

        dispatch({ type: 'RESET' });
        setLeftPadding(new Array(20).fill(' ').join(''));
        setWordCount(0);
        setCurrentChar(initialWords.charAt(0));
        setIncomingChars(initialWords.substr(1));
        setTypedChars('');
        setOutgoingChars('');
    }

    return (
        <>
            <DifficultySelector playerData={playerData} dispatch={dispatch} cleaningFunction={handleButtonClick} />
            <DurationSelector playerData={playerData} dispatch={dispatch} cleaningFunction={handleButtonClick} />
            <Clock playerData={playerData} time={playerData.duration} />
            <Stats playerData={playerData} />

            <div style={{backgroundColor: theme.primaryColor}}>HELLO</div>

            {playerData.gameEnded && (
                <SinglePlayerResult wpm={playerData.wpm} accuracy={playerData.accuracy} onClick={handleButtonClick}/> 
            )}

            <Typing 
                playerData={playerData} 
                wordCount={wordCount} 
                setWordCount={setWordCount} 
                dispatch={dispatch} 
                startTime={new Date().getTime()} 
                leftPadding={leftPadding}
                setLeftPadding={setLeftPadding} 
                currentChar={currentChar}
                setCurrentChar={setCurrentChar}
                incomingChars={incomingChars}
                setIncomingChars={setIncomingChars}
                typedChars={typedChars}
                setTypedChars={setTypedChars}
                outgoingChars={outgoingChars}
                setOutgoingChars={setOutgoingChars}
            />
        </>
    )
}

export default SinglePlayerPlay;