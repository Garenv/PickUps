import * as actionType from '../store/actions';

const initialState = {
    closeMainModalButton: false
};

const mainModalButtonReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.OPEN_PAY_MODAL:
            return {
                ...state,
                closeMainModalButton: true
            };

        case actionType.CLOSE_PAY_MODAL:
            return {
                ...state,
                closeMainModalButton: false
            };

        default:
            return state;
    }
};

export default mainModalButtonReducer;