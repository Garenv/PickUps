import React from 'react';

const foodButton = (props) => {
    return(
        <button className="btn btn-primary btn-lg btn-block" onClick={props.clicked}>{props.label}</button>
    );
};

export default foodButton;
