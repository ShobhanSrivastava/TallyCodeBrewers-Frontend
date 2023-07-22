import { useNavigate } from 'react-router-dom';
import { useContext, useRef } from 'react';
import Switch from 'react-switch';
import { PlayerContext, ThemeContext } from '../context';
import toast from 'react-hot-toast';

function Navbar() {
    const { playerData, dispatch } = useContext(PlayerContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const navigate = useNavigate();

    const { mode } = playerData;
    const switchRef = useRef(null);

    function handleChange() {
        const path = mode === 'single' ? '/multiplayer' : '/';
        dispatch({ type: 'CHANGE_MODE' })
        switchRef.current.focus();
        toast.success("Game mode changed");
        navigate(path);
    }

    return (
        <div className="navbar" style={{ backgroundColor: '' }}>
            <h1>HeavyTyper</h1>
            {/* To change the theme of the application */}
            <div className="toggle-switch">
                <div className="ele toggle-theme" onClick={toggleTheme}>{ theme.themeName === 'light' ? 'Light' : 'Dark' }</div>
                <div className="ele">Solo</div>
                <button ref={switchRef} style={{display:'hidden', border:0}}>
                </button>
                <div className="ele">
                    <Switch 
                        checked={mode === 'multi'}
                        onChange={handleChange}
                        // ref={switchRef}
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