import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import './App.scss';
import Header from './components/Header/Header';
import AuthenticationPage from './pages/Authentication/AuthenticationPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import { RootState } from './redux/store';
import { selectCurrentUser } from './redux/User/UserSelector';

class App extends React.Component<any, any> {
    unsubscribeFromAuth: any = null;

    componentDidMount() {
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route
                        path="/sign-in"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <AuthenticationPage />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(App);
