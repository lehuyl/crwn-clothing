import React from 'react';
import { connect } from 'react-redux';
import { Collection } from '../../common/types';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { selectCollection } from '../../redux/Shop/ShopSelector';
import { RootState } from '../../redux/store';

import './CollectionPage.scss';

interface Props {
    collection: Collection | null;
}

const CollectionPage = ({ collection }: Props) => {
    return (
        <div>
            {collection ? (
                <div className="collection-page">
                    <h2 className="title">{collection.title}</h2>
                    <div className="items">
                        {collection.items.map(item => (
                            <CollectionItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            ) : (
                <div>No items found</div>
            )}
        </div>
    );
};

const mapStateToProps = (state: RootState, ownProps: any) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
