import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import checkOutModalReducer from './store/checkOutModalReducer';
import payModalButtonReducer from './store/payModalButtonReducer';
import showPayModalReducer from './store/showPayModalReducer';
import showBackdropReducer from "./store/showBackdropReducer";

// Routing
import { BrowserRouter } from 'react-router-dom';


const rootReducer = combineReducers({
    isOpen: checkOutModalReducer,
    closePayModalButton: payModalButtonReducer,
    showPayModal: showPayModalReducer,
    showBackdropModal: showBackdropReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
