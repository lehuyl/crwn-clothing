import React from 'react';
import { Switch, Route } from 'react-router';
import './App.scss';
import Header from './components/Header/Header';
import AuthenticationPage from './pages/Authentication/AuthenticationPage';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/sign-in" component={AuthenticationPage} />
            </Switch>
        </div>
    );
}

export default App;
