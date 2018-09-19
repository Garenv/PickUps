import React from 'react';

import classes from './PayModalBackdrop.css';

const backdrop = (props) => (
    props.showBackdropModal ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;