import React from 'react';
import classes from './CheckoutButton.css';

const button = (props) => (
    <button className={classes.Button} onClick={props.clicked}>Checkout</button>
);

export default button;