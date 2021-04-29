import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { Item, Product } from '../../common/types';
import {
    addItem,
    clearItemFromCart,
    removeItem,
} from '../../redux/Cart/CartAction';

import './CheckoutItem.scss';

interface Props {
    cartItem: Product;
    addItem: (item: Item) => Dispatch<Action>;
    removeItem: (id: number) => Dispatch<Action>;
    clearItemFromCart: (id: number) => Dispatch<Action>;
}

const CheckoutItem = ({
    cartItem,
    addItem,
    removeItem,
    clearItemFromCart,
}: Props) => {
    const { id, name, imageUrl, price } = cartItem.item;
    const { quantity } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="items" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(id)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem.item)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div
                className="remove-button"
                onClick={() => clearItemFromCart(id)}
            >
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    addItem: (item: Item) => dispatch(addItem(item)),
    removeItem: (id: number) => dispatch(removeItem(id)),
    clearItemFromCart: (id: number) => dispatch(clearItemFromCart(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
