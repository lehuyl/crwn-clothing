import React from 'react';
import { connect } from 'react-redux';
import { ICartItem } from '../../common/types';
import { RootState } from '../../redux/store';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';

interface Props {
    cartItems: { [id: string]: ICartItem };
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

const mapStateToProps = ({ cart: { cartItems } }: RootState) => ({
    cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
