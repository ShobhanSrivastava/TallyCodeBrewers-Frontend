function DifficultySelector({ playerData, dispatch, cleaningFunction }) {
    return (
    <div>
        { playerData.difficulty }
        <div onClick={()=>{
            cleaningFunction();
            dispatch({type: 'CHANGE_DIFFICULTY', difficulty: 0})
        }}>Noob</div>
        <div onClick={()=>{
            cleaningFunction();
            dispatch({type: 'CHANGE_DIFFICULTY', difficulty: 1})
        }}>Pro</div>
        <div onClick={()=>{
            cleaningFunction();
            dispatch({type: 'CHANGE_DIFFICULTY', difficulty: 2})
        }}>Ultra Pro</div>
    </div>
)}

export default DifficultySelector;