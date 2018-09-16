import React from 'react';

import classes from './CloseModal.css';

const closeModal = (props) => (
    <div className={classes.Close}>
        <button className={classes.CloseButton} onClick={props.closeMainModalButton}>Close</button>
    </div>
);

export default closeModal;