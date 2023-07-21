import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const lightTheme = {
    themeName: 'light',
    primaryColor: 'white',
    primaryTextColor: 'black'
}

const darkTheme = {
    themeName: 'dark',
    primaryColor: 'black',
    primaryTextColor: 'white'
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