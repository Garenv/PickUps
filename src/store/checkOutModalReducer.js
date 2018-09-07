import * as actionType from '../store/actions';

const initialState = {
    isModalOpen: false
};

const checkOutModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true
            };

        case actionType.CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false
            };
        default:
            return state;
    }

};

export default checkOutModalReducer;