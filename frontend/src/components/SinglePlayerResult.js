function SinglePlayerResult({ wpm, accuracy, onClick}) {
    return (
    <div className="result-modal">
      <div className="modal-content">
        <h2>Results:</h2>
        <p>WPM: {wpm}</p>
        <p>Accuracy: {accuracy}%</p>
        <button onClick={onClick}>OK</button>
      </div>
    </div>
    );
}

export default SinglePlayerResult;