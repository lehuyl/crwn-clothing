import React from 'react';
import { Item } from '../../common/types';
import './CollectionItem.scss'

const CollectionItem = ({ name, price, imageUrl }: Item) => (
    <div className="collection-item">
        <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="flex w-full h-1/6 justify-between text-lg">
            <span className="w-11/12 mb-2">{name}</span>
            <span className="w-1/12">{price}</span>
        </div>
    </div>
);
export default CollectionItem;
