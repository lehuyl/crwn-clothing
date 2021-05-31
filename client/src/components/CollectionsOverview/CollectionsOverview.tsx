import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Collection } from '../../common/types';
import { selectCollectionsForPreview } from '../../redux/Shop/ShopSelector';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

import './CollectionsOverview.scss';

interface Props {
    collections: Collection[];
}

const CollectionsOverview = ({ collections }: Props) => (
    <div className="collections-overview">
        {collections.map((collection) => (
            <CollectionPreview key={collection.id} collection={collection} />
        ))}
    </div>
)

const mapToStateProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapToStateProps)(CollectionsOverview);