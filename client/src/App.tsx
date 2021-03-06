import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import './App.scss';
import Header from './components/Header/Header';
import AuthenticationPage from './pages/Authentication/AuthenticationPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import { RootState } from './redux/store';
import { checkUserSession } from './redux/User/UserAction';
import { selectCurrentUser } from './redux/User/UserSelector';

const App = ({ checkUserSession, currentUser }: any) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

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
                        currentUser ? (
                            <Redirect to="/" />
                        ) : (
                            <AuthenticationPage />
                        )
                    }
                />
            </Switch>
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
