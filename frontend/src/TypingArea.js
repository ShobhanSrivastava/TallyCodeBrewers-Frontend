import { useState } from 'react';
import { generate } from './words.js';
import useKeyPress from './useKeyPress.js';
import { currentTime } from './Time.js';

const initialWords = generate();

const TypingArea = ({
  startTime,
  setStartTime,
  setWpm,
  setAccuracy,
  wordCount,
  setWordCount,
  typedChars,
  setTypedChars,
  outgoingChars,
  setOutgoingChars
}) => {
  const [leftPadding, setLeftPadding] = useState(new Array(20).fill(' ').join(''));
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));

  useKeyPress(key => {
    if (!startTime) {
      setStartTime(currentTime());
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
        const durationInMinutes = (currentTime() - startTime) / 60000.0;
        setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
      }
    }

    const updatedTypedChars = typedChars + key;
    setTypedChars(updatedTypedChars);
    setAccuracy(
      ((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(2)
    );
  });

  return (
    <div className="typing-area">
      <p>Sample text for typing...</p>
      {/* <textarea value={userInput} onChange={onUserInputChange} /> */}
      <br></br>
      <p className="Character">
        <span className="Character-out">{(leftPadding + outgoingChars).slice(-20)}</span>
        <span className="Character-current">{currentChar}</span>
        <span>{incomingChars.substr(0, 20)}</span>
      </p>
    </div>
  );
};

export default TypingArea;
