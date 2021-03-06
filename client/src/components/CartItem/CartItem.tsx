import React from 'react';
import { Product } from '../../common/types';

import './CartItem.scss';

const CartItem = ({ item: { imageUrl, price, name}, quantity }: Product) => (
    <div className="cart-item">
        <img src={imageUrl} alt='item' />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x {price}</span>
        </div>
    </div>
)
export default CartItem;