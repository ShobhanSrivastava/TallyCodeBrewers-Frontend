import { createContext, useReducer } from 'react';

export const PlayerContext = createContext();

const defaultPlayerData = {
    mode: 'single',
    difficulty: 0,
    duration: 30,
    wpm: null,
    accuracy: null,
    isPlaying: false,
    remainingTime: null,
    gameStartTime: null,
    gameEnded: false,
    socket: null,
    room: null
}

function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE_MODE': {
            let newPlayerMode = 'single';
            if(state.mode === 'single') newPlayerMode = 'multi'
            return { ...defaultPlayerData, mode: newPlayerMode }
        }
        case 'CHANGE_DIFFICULTY': return { ...state, difficulty: action.difficulty }
        case 'CHANGE_DURATION': return { ...state, duration: action.duration }
        case 'CHANGE_WPM': return { ...state, wpm: action.wpm }
        case 'CHANGE_ACCURACY': return { ...state, accuracy: action.accuracy }
        case 'TOGGLE_PLAYING': return { ...state, isPlaying: !state.isPlaying }
        case 'TOGGLE_GAME_ENDED': return { ...state, gameEnded: !state.gameEnded }
        case 'GAME_START_TIME': return { ...state, gameStartTime: action.gameStartTime }
        case 'CHANGE_REMAINING_TIME': return { ...state, remainingTime: action.remainingTime }
        case 'CHANGE_SOCKET': return { ...state, socket: action.socket }
        case 'CHANGE_ROOM': return { ...state, room: action.room }
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