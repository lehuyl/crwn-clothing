import React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';

const ShopPage = ({ match }: RouteComponentProps) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;
