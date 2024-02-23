import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Store from './store/store';
import LandingPage from './components/landingpage/landingpage';

interface State {
    store: Store;
}

export const store = new Store();

export const Context = createContext<State>({
    store,
});

ReactDOM.render(
    <Context.Provider value={{ store }}>
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/app" element={<App />} />
            </Routes>
        </Router>
    </Context.Provider>,
    document.getElementById('root')
);