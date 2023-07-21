import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const lightTheme = {
    themeName: 'light',
    primaryColor: '#FFFFFF',
    primaryTextColor: '#000000'
}

const darkTheme = {
    themeName: 'dark',
    primaryColor: '#121212',
    primaryTextColor: '#000000'
}

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    function toggleTheme() {
        if(theme.themeName === 'light') {
            setTheme(darkTheme);
        }
        else {
            setTheme(lightTheme);
        }
    }
    
    return (
    <ThemeContext.Provider
        value={{
            theme, 
            toggleTheme
        }}>
        { children }
    </ThemeContext.Provider>
)}

export default ThemeProvider;