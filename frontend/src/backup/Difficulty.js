

const Difficulty = ({handleDifficultyChange}) => {
    return (  
        <div className="difficulty">
            <div>Difficulty: </div>
            <button onClick={() => handleDifficultyChange('Noob')}>Noob</button>
            <button onClick={() => handleDifficultyChange('Pro')}>Pro</button>
            <button onClick={() => handleDifficultyChange('UltraPro')}>UltraPro</button>
        </div>
    );
}
 
export default Difficulty;