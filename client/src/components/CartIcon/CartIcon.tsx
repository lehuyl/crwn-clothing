import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/Cart/CartSelector';
import { toggleCartDropdownVisibility } from '../../redux/Cart/CartAction';
import { RootState } from '../../redux/store';
import './CartIcon.scss';

const CartIcon = ({ toggleCartVisibility, itemCount }: any) => (
    <div className="cart-icon" onClick={toggleCartVisibility} >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch: any) => ({
    toggleCartVisibility: () => dispatch(toggleCartDropdownVisibility())
});

const mapStateToProps = (state: RootState) => {
    return { itemCount: selectCartItemsCount(state) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
