const ResultModal = ({ wpm, accuracy, onOK }) => {
  return (
    <div className="result-modal">
      <div className="modal-content">
        <h2>Results:</h2>
        <p>WPM: {wpm}</p>
        <p>Accuracy: {accuracy}%</p>
        <button onClick={onOK}>OK</button>
      </div>
    </div>
  );
};

export default ResultModal;
