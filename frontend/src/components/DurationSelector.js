function DurationSelector({ playerData, dispatch, cleaningFunction }) {
    function handleClick(duration) {
        cleaningFunction();
        dispatch({type: 'CHANGE_DURATION', duration });
    }

    return (
    <div>
        { playerData.duration }
        <div onClick={()=>handleClick(30)}>30s</div>
        <div onClick={()=>handleClick(45)}>45s</div>
        <div onClick={()=>handleClick(60)}>60s</div>
        <div onClick={()=>handleClick(120)}>120s</div>
    </div>
)}

export default DurationSelector;