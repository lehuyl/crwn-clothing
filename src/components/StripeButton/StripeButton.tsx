import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

interface Props {
    price: number;
}

const StripeCheckoutButton = ({ price }: Props) => {
    const priceInCents: number = price * 100;
    const publishableKey: string = process.env.REACT_APP_STRIPE_PUBLIC_KEY || "";
    
    const onToken = (token: any) => {
        console.log(token);
    }

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
    )
}

export default StripeCheckoutButton;