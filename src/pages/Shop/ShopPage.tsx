import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import { fetchCollectionsStartAsync } from '../../redux/Shop/ShopAction';
import {
    selectIsCollectionFetching,
    selectIsCollectionsLoad,
} from '../../redux/Shop/ShopSelector';
import CollectionPage from '../Collection/CollectionPage';

const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
    match,
    isCollectionFetching,
    fetchCollectionsStartAsync,
    isCollectionsLoaded,
}: any) => {
    useEffect(() => {
        if (!isCollectionsLoaded) fetchCollectionsStartAsync();
    }, [isCollectionsLoaded, fetchCollectionsStartAsync]);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                render={props => (
                    <CollectionsOverViewWithSpinner
                        isLoading={isCollectionFetching}
                        {...props}
                    />
                )}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={props => (
                    <CollectionPageWithSpinner
                        isLoading={!isCollectionsLoaded}
                        {...props}
                    />
                )}
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoad,
    isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
