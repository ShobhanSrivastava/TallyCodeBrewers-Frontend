function DifficultySelector({ playerData, dispatch }) {
    return (
    <div>
        { playerData.difficulty }
        <div onClick={()=>dispatch({type: 'CHANGE_DIFFICULTY', difficulty: 0})}>Noob</div>
        <div onClick={()=>dispatch({type: 'CHANGE_DIFFICULTY', difficulty: 1})}>Pro</div>
        <div onClick={()=>dispatch({type: 'CHANGE_DIFFICULTY', difficulty: 2})}>Ultra Pro</div>
    </div>
)}

export default DifficultySelector;