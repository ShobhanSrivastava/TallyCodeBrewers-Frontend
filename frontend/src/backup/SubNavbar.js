import Difficulty from "./Difficulty";
import Duration from "./Duration";

const SubNavbar = ({handleDurationChange, handleDifficultyChange}) => {
    return (  
        <div className="subNavbar">

            <Difficulty handleDifficultyChange={handleDifficultyChange}/>
            <Duration handleDurationChange={handleDurationChange}/>
        </div>
    );
}
 
export default SubNavbar;