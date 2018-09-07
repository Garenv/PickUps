import * as actionType from '../store/actions';

const initialState = {
    closePayModalButton: false
};

const payModalButtonReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.OPEN_PAY_MODAL:
            return {
                ...state,
                closePayModalButton: true
            };

        case actionType.CLOSE_PAY_MODAL:
            return {
                ...state,
                closePayModalButton: false
            };

        default:
            return state;
    }
};

export default payModalButtonReducer;