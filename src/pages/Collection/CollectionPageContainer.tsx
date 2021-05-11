import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import { selectIsCollectionsLoad } from '../../redux/Shop/ShopSelector';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoad(state),
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionPage);

export default CollectionsPageContainer as any;