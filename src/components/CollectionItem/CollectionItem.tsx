import React from 'react';
import { connect } from 'react-redux';
import { Item } from '../../common/types';
import { addItem } from '../../redux/Cart/CartActions';
import CustomButton from '../CustomButton/CustomButton';
import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }: any) => {
    const { name, price, imageUrl } = item;

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>
                Add to cart
            </CustomButton>
        </div>
    );
};
const mapDispatchToProps = (dispatch: any) => ({
    addItem: (item: Item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
