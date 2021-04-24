import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdownVisibility } from '../../redux/Cart/CartActions';
import './CartIcon.scss';

const CartIcon = ({ toggleCartVisibility }: any) => (
    <div className="cart-icon" onClick={toggleCartVisibility} >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
);
const mapDispatchToProps = (dispatch: any) => ({
    toggleCartVisibility: () => dispatch(toggleCartDropdownVisibility())
});
export default connect(null, mapDispatchToProps)(CartIcon);
