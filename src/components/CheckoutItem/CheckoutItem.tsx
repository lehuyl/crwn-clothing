import React from 'react';
import { Product } from '../../common/types';

import './CheckoutItem.scss';

interface Props {
    cartItem: Product;
}

const CheckoutItem = ({
    cartItem: {
        item: { name, imageUrl, price },
        quantity,
    },
}: Props) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="items" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove">&#10005;</div>
    </div>
);

export default CheckoutItem;
