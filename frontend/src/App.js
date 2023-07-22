import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStateProvider, ThemeProvider, PlayerProvider } from './context'
import { SoloMode, Start } from './pages';
import { Navbar } from './components';
import { Toaster } from 'react-hot-toast';

import './App.css'

function App() {

    return (
        <ThemeProvider>
            <GlobalStateProvider>
                <PlayerProvider>   
                    <div>
                        <Toaster position='top-center' />
                    </div>
                    <Router>
                        <Navbar />
                        <Routes> 
                            <Route exact path='/' element={<SoloMode />} />
                            <Route exact path='/multiplayer' element={<Start />} />
                        </Routes>
                    </Router>
                </PlayerProvider>
            </GlobalStateProvider>
        </ThemeProvider>
    );
}

export default App;
