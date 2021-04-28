import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { Product } from '../../common/types';
import { removeItem } from '../../redux/Cart/CartAction';

import './CheckoutItem.scss';

interface Props {
    cartItem: Product;
    removeItem: (id: number) => Dispatch<Action>
}

const CheckoutItem = ({
    cartItem: {
        item: { id, name, imageUrl, price },
        quantity,
    }, removeItem
}: Props) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="items" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => removeItem(id)}>&#10005;</div>
    </div>
);

const mapDispatchToProps = (dispatch: any) => ({
    removeItem: (id: number) => dispatch(removeItem(id))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
