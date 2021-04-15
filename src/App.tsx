import React from 'react';
import { Switch, Route } from 'react-router';
import './App.scss';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import AuthenticationPage from './pages/Authentication/AuthenticationPage';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';

class App extends React.Component<{}, any> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentUser: null
        }

    }

    unsubscribeFromAuth: any = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef?.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            }

            this.setState({ currentUser: userAuth })
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
