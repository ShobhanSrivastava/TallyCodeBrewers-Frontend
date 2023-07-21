import { useState, useEffect } from 'react';

const Timer = ({ remainingTime, onTimerEnd }) => {
  const [time, setTime] = useState(remainingTime);

  useEffect(() => {
    setTime(remainingTime);
  }, [remainingTime])
  
  useEffect(() => {
    let intervalId;

    if (time > 0) {
        //setInterval function ek var m store kra h bas
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      onTimerEnd(); // Call the callback when the timer ends
    }

    return () => clearInterval(intervalId);
  }, [time, onTimerEnd]);

  return (
    <div className="timer">
      <h2>Time Remaining: {time}s</h2>
    </div>
  );
};

export default Timer;
