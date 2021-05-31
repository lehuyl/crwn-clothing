import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { createStructuredSelector } from 'reselect';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import { fetchCollectionsStart } from '../../redux/Shop/ShopAction';
import {
    selectIsCollectionsLoad,
} from '../../redux/Shop/ShopSelector';
import CollectionsPageContainer from '../Collection/CollectionPageContainer';


const ShopPage = ({
    match,
    fetchCollectionsStart,
    isCollectionsLoaded,
}: any) => {
    useEffect(() => {
        if (!isCollectionsLoaded) fetchCollectionsStart();
    }, [isCollectionsLoaded, fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionsPageContainer}
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoad,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
