import React from 'react';

const modal = props => {
    const cssClasses = ["Modal", props.showPayModal ? "ModalOpen" : "ModalClosed"];

    return(
        <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button onClick={props.closePayModal}>Confirm</button>
        </div>
    );
};


export default modal;