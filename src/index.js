import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import checkOutModalReducer from './store/checkOutModalReducer';
import payModalButtonReducer from './store/payModalButtonReducer';
import showPayModalReducer from './store/showPayModalReducer';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import showBackdropReducer from "./store/showBackdropReducer";

const rootReducer = combineReducers({
   isOpen: checkOutModalReducer,
    closePayModalButton: payModalButtonReducer,
    showPayModal: showPayModalReducer,
    showBackdropModal: showBackdropReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
