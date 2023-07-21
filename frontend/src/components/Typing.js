import { useKeyPress } from '../hooks';
import { generate } from '../utils/words';
import { calculateWPM } from '../utils/utilFunctions';

function Typing({ 
  playerData, 
  dispatch, 
  wordCount, 
  setWordCount,
  leftPadding,
  setLeftPadding,
  currentChar,
  setCurrentChar,
  incomingChars,
  setIncomingChars,
  typedChars,
  setTypedChars,
  outgoingChars,
  setOutgoingChars,
}) {

  useKeyPress(key => {
    if(!playerData.gameEnded) {

      if(!playerData.isPlaying) {
        dispatch({ type: 'TOGGLE_PLAYING' })
        dispatch({ type: 'GAME_START_TIME', gameStartTime: Date.now() })
        dispatch({ type: 'CHANGE_REMAINING_TIME', remainingTime: playerData.duration })
      }
      
      let updatedOutgoingChars = outgoingChars;
      let updatedIncomingChars = incomingChars;
      if (key === currentChar) {
        if (leftPadding.length > 0) {
          setLeftPadding(leftPadding.substring(1));
        }
        updatedOutgoingChars += currentChar;
        setOutgoingChars(updatedOutgoingChars);
        
        setCurrentChar(incomingChars.charAt(0));
        
        updatedIncomingChars = incomingChars.substring(1);
      if (updatedIncomingChars.split(' ').length < 10) {
        updatedIncomingChars += ' ' + generate();
      }
      setIncomingChars(updatedIncomingChars);
      
      if (incomingChars.charAt(0) === ' ') {
        setWordCount(prevWordCount => prevWordCount + 1);
        // console.log((wordCount+1)*60);
        // console.log(playerData.wpm);
        const durationInSeconds = (Date.now() - playerData.gameStartTime)/1000;
        console.log(Math.floor((wordCount+1)*60/durationInSeconds));
        dispatch({ type: 'CHANGE_WPM', wpm: calculateWPM(playerData.gameStartTime, wordCount) })
      }
    }
    
    const updatedTypedChars = typedChars + key;
    setTypedChars(updatedTypedChars);
    dispatch({ type: 'CHANGE_ACCURACY', accuracy: ((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(2) })
  }
  });
  
  return (
    <div className="typing-area">
      <p>Sample text for typing...</p>
      <br></br>
      <p className="Character">
        <span className="Character-out">{(leftPadding + outgoingChars).slice(-20)}</span>
        <span className="Character-current">{currentChar}</span>
        <span>{incomingChars.substr(0, 20)}</span>
      </p>
    </div>
  );
}

export default Typing;