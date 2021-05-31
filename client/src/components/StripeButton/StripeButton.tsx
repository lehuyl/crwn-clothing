import axios from 'axios';
import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

interface Props {
    price: number;
}

const StripeCheckoutButton = ({ price }: Props) => {
    const priceInCents: number = price * 100;
    const publishableKey: string =
        process.env.REACT_APP_STRIPE_PUBLIC_KEY || '';

    const onToken = (token: any) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceInCents,
                token,
            },
        })
            .then(response => {
                console.log(response);
                alert('Payment successful');
            })
            .catch(error => {
                console.log('Payment error: ', JSON.parse(error));
                alert(
                    'There was an issue with your payment. Please ensure you use the provided credit card',
                );
            });
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            description={`Your total is ${price}`}
            amount={priceInCents}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
