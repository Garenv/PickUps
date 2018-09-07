import React from 'react';
import classes from './PayModalButton.css';

const payModalButton = (props) => (
    <button className={classes.Button} onClick={props.openPayModalButton}>Pay</button>
);

export default payModalButton;