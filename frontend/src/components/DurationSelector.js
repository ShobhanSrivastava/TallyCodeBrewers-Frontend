function DurationSelector({ playerData, dispatch, cleaningFunction }) {
    function handleClick(duration) {
        cleaningFunction();
        dispatch({type: 'CHANGE_DURATION', duration });

    }

    return (
        <div className="duration">
        <div style={{fontWeight:'bold'}}>Duration:</div>
        <button onClick={()=>handleClick(30)} className={playerData.duration === 30 ? 'active-duration' : ''}>30s</button>
        <button onClick={()=>handleClick(45)} className={playerData.duration === 45 ? 'active-duration' : ''}>45s</button>
        <button onClick={()=>handleClick(60)} className={playerData.duration === 60 ? 'active-duration' : ''}>60s</button>
        <button onClick={()=>handleClick(120)} className={playerData.duration === 120 ? 'active-duration' : ''}>120s</button>
    </div>
)}

export default DurationSelector;