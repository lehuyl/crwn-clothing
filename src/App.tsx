import React from 'react';
import { Switch, Route } from 'react-router';
import './App.scss';
import Header from './components/Header/Header';
import { auth } from './firebase/firebase.utils';
import AuthenticationPage from './pages/Authentication/AuthenticationPage';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import firebase from 'firebase/app';

interface State {
    currentUser: firebase.User | null;
}
class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentUser: null
        }

    }

    unsubscribeFromAuth: any = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth(); 
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/sign-in" component={AuthenticationPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
