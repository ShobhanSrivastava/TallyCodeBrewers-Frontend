import StatsBox from "./StatsBox";
import Timer from "./Timer";

const StatsBoxWithTimer = ({ remainingTime, wpm, accuracy, handleTimerEnd }) => {
  return (
    <div className="statsBoxWithTime">
      <StatsBox wpm={wpm} accuracy={accuracy} />
      <Timer remainingTime={remainingTime} onTimerEnd={handleTimerEnd} />
    </div>
  );
};

export default StatsBoxWithTimer;
