import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import firebase from 'firebase/app';
import { auth } from '../../firebase/firebase.utils';

interface Props {
    currentUser: firebase.User | null;
}

const Header = ({ currentUser }: Props) => (
    <div className="flex h-20 w-full justify-between mb-4">
        <Link to="/">
            <Logo className="h-full w-20 p-6" />
        </Link>
        <div className="flex w-1/2 h-full items-center justify-end ">
            <Link className="py-2 px-4 cursor-pointer" to="/shop">SHOP</Link>
            <Link className="py-2 px-4" to="/shop">CONTACT</Link>
            {
                currentUser ?
                <div className="py-2 px-4 cursor-pointer" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="py-2 px-4 cursor-pointer" to="/sign-in">SIGN IN</Link>
            }
        </div>
    </div>
)
export default Header;