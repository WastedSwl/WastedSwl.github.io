import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Store from './store/store';
import LandingPage from './components/landingpage/landingpage';
import Teachers from './components/teachers/teachers';

interface State {
    store: Store;
}

export const store = new Store();

export const Context = createContext<State>({
    store,
});

const Root = () => (
    <Router>
        <Routes>
            <Route
                path="/"
                element={
                    <Context.Provider value={{ store }}>
                        <LandingPage />
                        <Teachers />
                    </Context.Provider>
                }
            />
            <Route path="/app" element={<App />} />
        </Routes>
    </Router>
);

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById('root')
);
