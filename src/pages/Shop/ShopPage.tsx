import React from 'react';
import { SHOP_DATA } from '../../common/shop-data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { Collection } from '../../common/types';

export interface State {
    collections: Collection[];
}

class ShopPage extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        const {collections} = this.state;
        return <div>{
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}</div>;
    }
}
export default ShopPage;
