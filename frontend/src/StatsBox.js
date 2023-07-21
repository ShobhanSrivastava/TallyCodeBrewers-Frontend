
const StatsBox = ({ wpm, accuracy }) => {
    return (
      <div className="stats-box">
        <div>
          <h3>WPM</h3>
          <p>{wpm}</p>
        </div>
        <div className="separator"></div> {/* Separator line */}
        <div>
          <h3>Accuracy</h3>
          <p>{accuracy}%</p>
        </div>
      </div>
    );
  };
  
  export default StatsBox;