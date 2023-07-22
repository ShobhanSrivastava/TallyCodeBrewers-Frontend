function DifficultySelector({ playerData, dispatch, cleaningFunction }) {
    function handleClick(difficulty) {
        if(cleaningFunction) cleaningFunction()
        dispatch({type: 'CHANGE_DIFFICULTY', difficulty });
    }
    return (
    <div className="difficulty">
        <div style={{fontWeight:'bold'}}>Difficulty:</div>
        <button onClick={()=>handleClick(0)} className={playerData.difficulty === 0 ? 'active-duration' : ''}>Noob</button>
        <button onClick={()=>handleClick(1)} className={playerData.difficulty === 1 ? 'active-duration' : ''}>Pro</button>
        <button onClick={()=>handleClick(2)} className={playerData.difficulty === 2 ? 'active-duration' : ''}>UltraPro</button>
    </div>
)}

export default DifficultySelector;