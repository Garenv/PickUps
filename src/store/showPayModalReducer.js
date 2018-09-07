import * as actionTypes from '../store/actions';

const initialState = {
    showPayModal: false
};

const showPayModalReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SHOW_PAY_MODAL:
            return {
                ...state,
                showPayModal: true
            };

        case actionTypes.DONT_SHOW_PAY_MODAL:
            return {
                ...state,
                showPayModal: false
            };

        default:
            return state;
    }
}

export default showPayModalReducer;