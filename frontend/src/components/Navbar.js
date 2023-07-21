import { useNavigate } from 'react-router-dom';
import { useContext, useRef } from 'react';
import Switch from 'react-switch';
import { PlayerContext, ThemeContext } from '../context';


function Navbar() {
    const { playerData, dispatch } = useContext(PlayerContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const navigate = useNavigate();

    const { mode } = playerData;
    function handleChange() {
        const path = mode === 'single' ? '/multiplayer' : '/';
        dispatch({type: 'CHANGE_PLAYER_MODE'})
        switchRef.current.focus();
        navigate(path);
    }

    return (
        <div style={{ backgroundColor: '' }}>
            HeavyTyper { mode }

            {/* To change the theme of the application */}
            <div onClick={toggleTheme}>{ theme.themeName === 'light' ? 'Dark' : 'Light' }</div>

            Solo
            <button ref={switchRef} style={{display:'hidden', border:0}}></button>
            <Switch 
                checked={mode === 'multi'}
                onChange={handleChange} 
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