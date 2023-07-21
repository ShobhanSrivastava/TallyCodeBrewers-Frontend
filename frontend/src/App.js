import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStateProvider, ThemeProvider, PlayerProvider } from './context'
import { SoloMode, Start } from './pages';
import { Navbar } from './components';

import './App.css'

function App() {
    return (
        <ThemeProvider>
            <GlobalStateProvider>
                <PlayerProvider>    
                    <Router>
                        <Navbar />
                        <Routes> 
                            <Route exact path='/' element={<SoloMode />} />
                            <Route exact path='/find' element={<Start />} />
                        </Routes>
                    </Router>
                </PlayerProvider>
            </GlobalStateProvider>
        </ThemeProvider>
    );
}

export default App;
