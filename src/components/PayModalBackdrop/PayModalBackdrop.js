import React from 'react';

import './PayModalBackdrop.css';

const backdrop = (props) => {
    const cssClasses = ['Backdrop', props.showPayModalBackdrop ? 'BackdropOpen' : 'BackdropClosed'];

    return (
        <div className={cssClasses.join(' ')}></div>
    );
};

export default backdrop;