import { useContext } from 'react';
import Switch from 'react-switch';
import { GlobalStateContext, ThemeContext } from '../context';

function Navbar() {
    const { globalData, dispatch } = useContext(GlobalStateContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const { playerMode } = globalData;
    return (
        <div className="navbar" style={{ backgroundColor: '' }}>
            <h1>HeavyTyper</h1>

            {/* To change the theme of the application */}
            <div className="toggle-switch">
                <div className="ele toggle-theme" onClick={toggleTheme}>{ theme.themeName === 'light' ? 'Light' : 'Dark' }</div>
                <div className="ele">Solo</div>
                <div className="ele">
                    <Switch 
                    checked={playerMode === 'multi'}
                    onChange={()=>dispatch({type: 'CHANGE_PLAYER_MODE'})} 
                    onColor='#7D7C80' 
                    offColor='#7D7C80' 
                    height={20}
                    width={40}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    />
                </div>
                <div className="ele">Multiplayer</div>
            </div>
            
        </div>
    );
}

export default Navbar;