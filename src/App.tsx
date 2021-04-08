import React from 'react';
import { Switch, Route } from 'react-router';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    );
}

export default App;
