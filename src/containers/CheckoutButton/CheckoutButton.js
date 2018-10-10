import React from 'react';
import classes from './CheckoutButton.css';

const CheckoutButton = (props) => (
    <button className={classes.Button} id="test" onClick={props.clicked}>Checkout</button>
);

export default CheckoutButton;