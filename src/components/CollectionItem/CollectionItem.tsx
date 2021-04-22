import React from 'react';
import { Item } from '../../common/types';
import CustomButton from '../CustomButton/CustomButton';
import './CollectionItem.scss'

const CollectionItem = ({ name, price, imageUrl }: Item) => (
    <div className="collection-item">
        <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton inverted>Add to cart</CustomButton>
    </div>
);
export default CollectionItem;
