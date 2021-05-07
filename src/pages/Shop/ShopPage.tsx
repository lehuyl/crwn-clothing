import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Collection } from '../../common/types';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import {
    convertCollectionsSnapshotToMap,
    firestore,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/Shop/ShopAction';
import CollectionPage from '../Collection/CollectionPage';

const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }: any) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        const unsubscribeFromSnapshot = collectionRef.onSnapshot(
            async (snapshot: any) => {
                const collectionsMap = await convertCollectionsSnapshotToMap(
                    snapshot,
                );
                updateCollections(collectionsMap);
                setLoading(false);
            },
        );

        return () => {
            unsubscribeFromSnapshot();
        };
    }, [updateCollections]);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                render={props => (
                    <CollectionsOverViewWithSpinner
                        isLoading={loading}
                        {...props}
                    />
                )}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={props => (
                    <CollectionPageWithSpinner isLoading={loading} {...props} />
                )}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    updateCollections: (collectionsMap: { [id: string]: Collection }) =>
        dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
