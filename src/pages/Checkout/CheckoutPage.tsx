import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Product } from '../../common/types';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/CartSelector';

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
        {
            Object.values(cartItems).map((cartItem: Product) => cartItem.item.name)
        }

        <div className="total">
            <span>Total: ${cartTotal}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);