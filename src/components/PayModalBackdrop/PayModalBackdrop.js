import React from 'react';

// import classes from './PayModalBackdrop.css';
import './PayModalBackdrop.css';

const backdrop = (props) => {
    const cssClasses = ['Backdrop', props.showBackdropModal ? 'BackdropOpen' : 'BackdropClosed'];

    return(
        <div className={cssClasses.join('')} />
    );
};

export default backdrop;