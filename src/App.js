import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Index from './index';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
