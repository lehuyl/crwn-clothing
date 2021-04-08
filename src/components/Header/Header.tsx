import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
    <div className="flex h-20 w-full justify-between mb-4">
        <Link to="/">
            <Logo className="h-full w-20 p-6" />
        </Link>
        <div className="flex w-1/2 h-full items-center justify-end ">
            <Link className="py-2 px-4" to="/shop">Shop</Link>
            <Link className="py-2 px-4" to="/shop">Contact</Link>
        </div>
    </div>
)
export default Header;