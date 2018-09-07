import * as actionTypes from '../store/actions';

const initialState = {
    showBackdropModal: false
};

const showBackdropReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SHOW_BACKDROP:
            return {
                ...state,
                showBackdropModal: true
            };

        case actionTypes.DONT_SHOW_BACKDROP:
            return {
                ...state,
                showBackdropModal: false
            };

        default:
            return state;
    }
}

export default showBackdropReducer;