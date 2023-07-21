import { useState, useEffect} from 'react';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import TypingArea from './TypingArea';
import StatsBoxWithTimer from './StatsBoxWithTimer';
import { currentTime } from './Time';
import ResultModal from './ResultModal';
import { generate } from './words';

const initialWords = generate();

const SoloMode = () => {

  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
	const [gameDifficulty, setGameDifficulty] = useState('easy');
  const [remainingTime, setRemainingTime] = useState(30);

	const [isGameStarted, setIsGameStarted] = useState('false')
	//Used for Statsbox comp.
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);


	//Used for typing area component
  const [wordCount, setWordCount] = useState(0);
  const [typedChars, setTypedChars] = useState('');
  const [outgoingChars, setOutgoingChars] = useState('');

  const [showResultModal, setShowResultModal] = useState(false);

  const handleTimerEnd = () => {
    setIsGameRunning(false);
    setIsGameEnded(true);

    // Calculate final results
    const durationInMinutes = remainingTime / 60;
    setWpm((wordCount / durationInMinutes).toFixed(2));
    setAccuracy(((outgoingChars.length * 100) / typedChars.length).toFixed(2));
    setShowResultModal(true);
  };

  // useEffect(() => {
  //   // Timer logic
  //   if (isGameRunning && !isGameEnded) {
  //     const timer = setInterval(() => {
  //       setGameDuration(prevDuration => prevDuration - 1);
  //     }, 1000);

  //     return () => {
  //       clearInterval(timer);
  //       handleTimerEnd(); // Call the function to show result modal when timer ends
  //     };
  //   }
  // }, [isGameRunning, isGameEnded]);

  // Function to handle mode switch (Solo or Multi-Player)
  const handleModeChange = e => {
    // Implement your logic to switch between modes
  };

	//Fuction to handle difficulty selection
	const handleDifficultyChange = difficulty => {
		setGameDifficulty(difficulty);
	}
  // Function to handle duration selection
  const handleDurationChange = duration => {
    setIsGameEnded(false);
    setUserInput('');
    setStartTime(null);
    setRemainingTime(duration);
    setWpm(0);
    setAccuracy(0);
    setWordCount(0);
    setTypedChars('');
    setOutgoingChars('');
    setShowResultModal(false);
  };

  // Function to handle user input change
  const handleUserInputChange = (e) => {
    if (remainingTime > 0 ) {
      setUserInput(e.target.value);
    }
  };

  // Function to handle closing the result modal
  const handleCloseResultModal = () => {
    setShowResultModal(false);
  };

  const handleResetGame = ({duration}) => {
    setIsGameEnded(false);
    setUserInput('');
    setStartTime(null);
    setRemainingTime(30);
    setWpm(0);
    setAccuracy(0);
    setWordCount(0);
    setTypedChars('');
    setOutgoingChars('');
    setShowResultModal(false);
  };


  return (
    <div>
      <Navbar onModeChange={handleModeChange} />
      <SubNavbar handleDurationChange={handleDurationChange} handleDifficultyChange={handleDifficultyChange}/>
      <StatsBoxWithTimer remainingTime={remainingTime} wpm={wpm} accuracy={accuracy} handleTimerEnd={handleTimerEnd}/>

      {showResultModal && (
        <ResultModal wpm={wpm} accuracy={accuracy} onOK={handleCloseResultModal}/>
      )}
			<br></br>
			<br></br>
      <TypingArea
				startTime={startTime}
				setStartTime={setStartTime}
        wordCount={wordCount}
        setWordCount={setWordCount}
        typedChars={typedChars}
        setTypedChars={setTypedChars}
        outgoingChars={outgoingChars}
        setOutgoingChars={setOutgoingChars}
        setWpm={setWpm}
        setAccuracy={setAccuracy}
      />
    </div>
  );
};

export default SoloMode	;
