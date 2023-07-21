function DurationSelector({ playerData, dispatch }) {
    function handleClick(duration) {
        dispatch({type: 'CHANGE_DURATION', duration });
    }

    return (
        <div className="duration">
        <div>Duration:</div>
        ({ playerData.duration })
        <button onClick={()=>handleClick(30)}>30s</button>
        <button onClick={()=>handleClick(45)}>45s</button>
        <button onClick={()=>handleClick(60)}>60s</button>
        <button onClick={()=>handleClick(120)}>120s</button>
    </div>
)}

export default DurationSelector;