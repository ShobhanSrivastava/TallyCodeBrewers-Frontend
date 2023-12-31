import { createContext, useReducer } from 'react';

export const TestContext = createContext();

const defaultTestData = {
    leftPadding: '                    ',
    currentChar: null,
    incomingCharacter: null,
    typedChar: '',
    outgoingChars: '',
    wordCount: 0
}

function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE_DIFFICULTY': return { ...state, difficulty: action.difficulty }
        case 'CHANGE_DURATION': return { ...state, duration: action.duration }
        case 'CHANGE_WPM': return { ...state, wpm: action.wpm }
        case 'CHANGE_ACCURACY': return { ...state, accuracy: action.accuracy }
        case 'TOGGLE_PLAYING': return { ...state, isPlaying: !state.isPlaying }
        case 'CHANGE_REMAINING_TIME': return { ...state, remainingTime: action.remainingTime }
        case 'RESET': return defaultPlayerData
    }
    throw Error ('Unknown Action: ' + action.type)
}

const PlayerProvider = ({ children }) => {
    const [playerData, dispatch] = useReducer(reducer, defaultPlayerData);
    
    return (
    <PlayerContext.Provider
        value={{
            playerData, dispatch
        }}>
        { children }
    </PlayerContext.Provider>
)}

export default PlayerProvider;