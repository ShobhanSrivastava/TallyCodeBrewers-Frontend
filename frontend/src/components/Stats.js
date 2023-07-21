function Stats({ playerData }) {
    return (
        <div>
            {
                playerData.wpm ? (
                    <div>
                        <div>{ playerData.wpm } WPM</div>
                        <div>{ playerData.accuracy } Accuracy</div>
                    </div>
                ) : 
                'The stats will show once the game begins'
            }
        </div>
    );  
}

export default Stats;