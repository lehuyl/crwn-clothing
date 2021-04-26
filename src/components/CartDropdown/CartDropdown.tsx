import React from 'react';
import { connect } from 'react-redux';
import { Product } from '../../common/types';
import { selectCartItems } from '../../redux/Cart/CartSelector';
import { RootState } from '../../redux/store';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';

interface Props {
    cartItems: { [id: string]: Product };
}

const CartDropdown = ({ cartItems }: Props) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {Object.values(cartItems).map(cartItem => (
                <CartItem key={cartItem.item.id} {...cartItem} />
            ))}
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = (state: RootState) => ({
    cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
