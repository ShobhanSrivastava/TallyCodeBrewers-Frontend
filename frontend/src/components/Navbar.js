import { useContext } from 'react';
import Switch from 'react-switch';
import { GlobalStateContext, ThemeContext } from '../context';

function Navbar() {
    const { globalData, dispatch } = useContext(GlobalStateContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const { playerMode } = globalData;
    return (
        <div style={{ backgroundColor: '' }}>
            HeavyTyper

            {/* To change the theme of the application */}
            <div onClick={toggleTheme}>{ theme.themeName === 'light' ? 'Light' : 'Dark' }</div>

            Single Player
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
            Multiplayer
        </div>
    );
}

export default Navbar;