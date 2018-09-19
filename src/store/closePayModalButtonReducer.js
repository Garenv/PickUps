import React from 'react';
import * as actionTypes from '../store/actions';

const initialState = {
    closePayModalButton: false
};

const closePayModalButtonReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLOSE_PAY_MODAL_BUTTON:
            return {
                ...state,
                closePayModalButton: false
            };

        default:
            return state;
    };
};

export default closePayModalButtonReducer;