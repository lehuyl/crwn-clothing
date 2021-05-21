import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartVisibility } from '../../redux/Cart/CartSelector';
import { signOutStart } from '../../redux/User/UserAction';
import { selectCurrentUser } from '../../redux/User/UserSelector';
import CartDropdown from '../CartDropdown/CartDropdown';
import CartIcon from '../CartIcon/CartIcon';

const Header = ({ currentUser, isVisible, signOutStart }: any) => (
    <div className="flex h-20 w-full justify-between mb-4">
        <Link to="/">
            <Logo className="h-full w-20 p-6" />
        </Link>
        <div className="flex w-1/2 h-full items-center justify-end ">
            <Link className="py-2 px-4 cursor-pointer" to="/shop">
                SHOP
            </Link>
            <Link className="py-2 px-4" to="/shop">
                CONTACT
            </Link>
            {currentUser ? (
                <div
                    className="py-2 px-4 cursor-pointer"
                    onClick={signOutStart}
                >
                    SIGN OUT
                </div>
            ) : (
                <Link className="py-2 px-4 cursor-pointer" to="/sign-in">
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        {isVisible ? <CartDropdown /> : null}
    </div>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isVisible: selectCartVisibility,
});

const mapDispatchToProps = (dispatch: any) => ({
    signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
