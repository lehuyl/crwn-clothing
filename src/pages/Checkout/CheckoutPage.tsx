import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Product } from '../../common/types';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';
import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/Cart/CartSelector';

import './CheckoutPage.scss';

interface Props {
    cartItems: { [id: string]: Product };
    cartTotal: number;
}

const CheckoutPage = ({ cartItems, cartTotal }: Props) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {Object.values(cartItems).map((cartItem: Product) => (
            <CheckoutItem key={cartItem.item.id} cartItem={cartItem} />
        ))}

        <div className="total">
            <span>Total: ${cartTotal}</span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: Any 3 digits - CVV: Any future date
        </div>
        <StripeCheckoutButton price={cartTotal} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
