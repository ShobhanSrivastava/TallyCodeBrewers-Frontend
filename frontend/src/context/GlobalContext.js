import { createContext, useReducer } from 'react';

export const GlobalStateContext = createContext();

const defaultGlobalData = {
    playerMode: 'single'
}

function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE_PLAYER_MODE': {
            let newPlayerMode = 'single';
            if(state.playerMode === 'single') newPlayerMode = 'multi'
            return { ...state, playerMode: newPlayerMode }
        }
        case 'RESET': return defaultGlobalData
    }
    throw Error ('Unknown Action: ' + action.type)
}

const GlobalStateProvider = ({ children }) => {
    const [globalData, dispatch] = useReducer(reducer, defaultGlobalData);

    return (
    <GlobalStateContext.Provider
        value={{
            globalData,
            dispatch
        }}>
        { children }
    </GlobalStateContext.Provider>
)}

export default GlobalStateProvider;