const Duration = ({handleDurationChange}) => {
    return (  
        <div className="duration">
            <div>Duration: </div>
            <button onClick={() => handleDurationChange(30)}>30s</button>
            <button onClick={() => handleDurationChange(45)}>45s</button>
            <button onClick={() => handleDurationChange(60)}>60s</button>
            <button onClick={() => handleDurationChange(120)}>120s</button>
        </div>
    );
}
 
export default Duration;