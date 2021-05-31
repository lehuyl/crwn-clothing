import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Product } from '../../common/types';
import { toggleCartDropdownVisibility } from '../../redux/Cart/CartAction';
import { selectCartItems } from '../../redux/Cart/CartSelector';
import { RootState } from '../../redux/store';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';

interface Props {
    cartItems: { [id: string]: Product };
}

const CartDropdown = ({
    cartItems,
    history,
    dispatch,
}: Props & RouteComponentProps<any> & DispatchProp) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {Object.keys(cartItems).length ? (
                Object.values(cartItems).map(cartItem => (
                    <CartItem key={cartItem.item.id} {...cartItem} />
                ))
            ) : (
                <span className="empty-message">Your cart is empty</span>
            )}
        </div>
        <CustomButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartDropdownVisibility());
            }}
        >
            Go To Checkout
        </CustomButton>
    </div>
);

const mapStateToProps = (state: RootState) => ({
    cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
