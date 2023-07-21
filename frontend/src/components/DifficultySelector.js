function DifficultySelector({ playerData, dispatch }) {
    return (
    <div className="difficulty">
        <div>Difficulty:</div>
        
        ({ playerData.difficulty })
        <button onClick={()=>dispatch({type: 'CHANGE_DIFFICULTY', difficulty: 0})}>Noob</button>
        <button onClick={()=>dispatch({type: 'CHANGE_DIFFICULTY', difficulty: 1})}>Pro</button>
        <button onClick={()=>dispatch({type: 'CHANGE_DIFFICULTY', difficulty: 2})}>Ultra Pro</button>
    </div>
)}

export default DifficultySelector;