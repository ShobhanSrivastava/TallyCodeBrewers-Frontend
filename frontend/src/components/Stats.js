function Stats({ playerData }) {
    return (
        <div>
            {
                playerData.wpm ? (
                    <div className="stats-box">
                        <div className="wpm">
                            <h3>WPM</h3>
                            <p>{playerData.wpm}</p>
                        </div>
                        <div className="separator"></div> {/* Separator line */}
                        <div className="accuracy">
                            <h3>Accuracy</h3>
                            <p>{playerData.accuracy}%</p>
                        </div>
                    </div>
                ) : 
                'The stats will show once the game begins'
            }
        </div>
    );  
}

export default Stats;